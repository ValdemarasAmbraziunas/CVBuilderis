using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

using CV_builder.Interfaces;
using CV_builder.Models;
using CV_builder.Infrastructure;

using iTextSharp.text;
using iTextSharp.text.pdf;
using System.Reflection;


namespace CV_builder.Services
{
    public class BuilderService : IBuilderService
    {
        public byte[] GenerateDocumentBytes(CVModel cvModel, TemplateTypes type, System.Drawing.Image image)
        {
            //Kolkas hardcodinta
            //turetu but viena funkcija, kuri duoda byte[] pagal sablono parametrus
            byte[] data = new byte[1];
            switch (type)
            {           
                case TemplateTypes.Valdemaro:
                    data = VTemplate(cvModel, image);
                    break;
                case TemplateTypes.Valdemaro2:
                    data = V2Template(cvModel, image);
                    break;
                default:
                    break;
            }

            return data;
        }

        private byte[] VTemplate(CVModel model, System.Drawing.Image image)
        {
            using (MemoryStream ms = new MemoryStream())
            {
                #region Grafika
                //Linija
                BaseColor lineColor = new BaseColor(208, 208, 80);
                Paragraph pa = new Paragraph(new Chunk(new iTextSharp.text.pdf.draw.LineSeparator(0.0F, 100.0F, lineColor, Element.ALIGN_LEFT, 1)));
                pa.SpacingBefore = 0f;
                pa.SpacingAfter = 10f;

                //Spalvos
                var titleColor = new BaseColor(10, 10, 170);

                //Fontai
                string encoding = BaseFont.CP1257;
                bool embedded = BaseFont.EMBEDDED;

                Font nameFont = FontFactory.GetFont(BaseFont.TIMES_ROMAN, encoding, embedded, 18, 0, BaseColor.BLACK);
                Font additionFont = FontFactory.GetFont(BaseFont.TIMES_ITALIC, encoding, embedded, 8, 0, titleColor);
                Font paragraphFont = FontFactory.GetFont(BaseFont.TIMES_BOLDITALIC, encoding, embedded, 12, 0, BaseColor.BLUE);
                Font infoFont = FontFactory.GetFont(BaseFont.TIMES_ROMAN, encoding, embedded, 12, 0, BaseColor.BLACK);

                #endregion

                Document doc = new Document(PageSize.A4);
                PdfWriter.GetInstance(doc, ms);
                doc.Open();

                //Paveikslėlis               
                Image jpg = getPhoto(image);
                if (jpg != null)
                {
                    jpg.ScaleToFit(120f, 100f);
                    jpg.Alignment = Element.ALIGN_LEFT;
                    jpg.SetAbsolutePosition(455f, 725f);
                }

                //title lentelė
                PdfPTable title2 = new PdfPTable(1);
                title2.HorizontalAlignment = 0;
                title2.SpacingAfter = 0f;
                title2.SpacingBefore = 0f;

                Field firstName = model.ContactInfo.Items.FirstOrDefault()[ContactInfoItem.FirstName]; 
                Field lastName = model.ContactInfo.Items.FirstOrDefault()[ContactInfoItem.LastName]; 
                string title = "";
                if (!string.IsNullOrEmpty(firstName?.Value))
                {
                    title = firstName.Value + " ";
                }
                if (!string.IsNullOrEmpty(lastName?.Value))
                {
                    title = title + lastName.Value;
                }
                PdfPCell a = TextOnly(title + "\n", nameFont);
                a.BorderColor = BaseColor.WHITE;
                Chunk d = new Chunk("Curriculum vitae", additionFont);
                d.SetBackground(BaseColor.LIGHT_GRAY);
                PdfPCell b = new PdfPCell(new Phrase(d));
                PdfPCell c = TextOnly(" ");
                b.BorderColor = BaseColor.WHITE;
                c.BorderColor = BaseColor.WHITE;
                title2.AddCell(a);
                title2.AddCell(b);
                title2.AddCell(c);
                title2.AddCell(c);

                doc.Add(title2);
                if (jpg != null)
                    doc.Add(jpg);

                model.PersonalInfo.Items.FirstOrDefault()[PersonalInfoItem.Photo].Value = null;
                RenderSection(model.ContactInfo, paragraphFont, infoFont, pa, doc);
                RenderSection(model.PersonalInfo, paragraphFont, infoFont, pa, doc);
                RenderSection(model.EducationInfo, paragraphFont, infoFont, pa, doc);
                RenderSection(model.CareerInfo, paragraphFont, infoFont, pa, doc);
                RenderSection(model.SkillsInfo, paragraphFont, infoFont, pa, doc);
                doc.Close();

                return ms.GetBuffer();
            }
        }

        private void RenderSection<T>(ISection<T> section, Font paragraphFont, Font infoFont, Paragraph pa, Document doc) where T : ISectionItem
        {
            if (section.Items.Count < 0) return;

            //Gali turėti fieldus, bet jei vartotojas neįves nei vienos reikšmės, reikėtų nedėti sekcijos pavadinimo
            int k = 0;
            Paragraph p = new Paragraph(section.Name, paragraphFont)
            {
                FirstLineIndent = 50,
                SpacingAfter = 0f,
                SpacingBefore = 0f
            };
            p.Add(pa);
            PdfPTable table = new PdfPTable(2);
            float[] widths = new float[] { 1f, 2f };
            table.SetWidths(widths);
            table.HorizontalAlignment = 0;
            table.SpacingAfter = 0f;
            table.SpacingBefore = 0f;

            foreach (var sectionItem in section.Items)
            {
                foreach (Field field in sectionItem.Values)
                {
                    if (!string.IsNullOrEmpty(field.Value))
                    {
                        PdfPCell cell = TextOnly(field.Label, infoFont);
                        cell.BorderColor = BaseColor.WHITE;
                        PdfPCell cell2 = TextOnly(field.Value ?? string.Empty, infoFont);
                        cell2.BorderColor = BaseColor.WHITE;

                        table.AddCell(cell);
                        table.AddCell(cell2);
                        k++;
                    }
                }
            }

            if (k > 0)
            {
                p.Add(table);
                doc.Add(p);
            }

        }

        public Image getPhoto(System.Drawing.Image image)
        {
            Image jpg = null;
            if (image != null)
            {
                jpg = Image.GetInstance(image, BaseColor.BLACK);
            }
            return jpg;
        }

        private byte[] V2Template(CVModel cvModel, System.Drawing.Image image)
        {
            using (MemoryStream ms = new MemoryStream())
            {
                #region Grafika
                //Custom spalvos
                BaseColor headerColor = new BaseColor(70, 130, 180);
                BaseColor mainColor = new BaseColor(220, 220, 220);

                //Fontai
                string encoding = BaseFont.CP1257;
                bool embedded = BaseFont.EMBEDDED;
                Font nameFont = FontFactory.GetFont(BaseFont.TIMES_BOLD, encoding, embedded, 26, 0, BaseColor.BLUE);
                Font profFont = FontFactory.GetFont(BaseFont.TIMES_ROMAN, encoding, embedded, 16, 0, BaseColor.BLACK);
                Font simpleFont = FontFactory.GetFont(BaseFont.TIMES_ROMAN, encoding, embedded, 11, 0, BaseColor.BLACK);
                Font titleFont = FontFactory.GetFont(BaseFont.TIMES_BOLD, encoding, embedded, 12, 0, BaseColor.BLUE);
                Font skillsFont = FontFactory.GetFont(BaseFont.TIMES_BOLD, encoding, embedded, 9, 0, BaseColor.BLACK);

                //Tuscias langelis
                PdfPCell empty = new PdfPCell(new Phrase(" "));
                empty.Border = Rectangle.NO_BORDER;
                #endregion
                //Sukuriamas dokumentas
                Document doc = new Document(PageSize.A4, 0, 0, 10, 10);
                PdfWriter.GetInstance(doc, ms);
                doc.Open();

                //Pagrindinė lentelė
                PdfPTable table = new PdfPTable(1);
                table.TotalWidth = 595f;
                table.LockedWidth = true;

                //Header
                PdfPCell header = V2TempHeader(headerColor);

                //Title, asmeninės informacijos blokas
                PdfPCell title = V2TempPersonalInfo(cvModel, nameFont, profFont, simpleFont);

                //Main dalis, nautrauka, skilai, karjera
                PdfPCell main = V2TempMain(cvModel, image, mainColor, titleFont, simpleFont, skillsFont);

                //Sudeda viską į pagrindinę lentelę
                table.AddCell(header);
                table.AddCell(empty);
                table.AddCell(title);
                table.AddCell(empty);
                table.AddCell(main);
                table.SplitLate = false;               
                //Sudeda turinį į dokumentą
                doc.Add(table);

                doc.Close();
                return ms.GetBuffer();
            }
        }

        public PdfPCell V2TempHeader(BaseColor headerColor)
        {
            //Header
            PdfPTable headerTable = new PdfPTable(3);
            headerTable.SplitLate = false;
            float[] headerWidths = new float[] { 1f, 2f, 8f };
            headerTable.SetWidths(headerWidths);
            //Hederio langeliai
            PdfPCell[] headerCells = new PdfPCell[3];
            for (int i = 0; i < headerCells.Length; i++)
            {
                headerCells[i] = new PdfPCell();
            }
            headerCells[0].Border = Rectangle.NO_BORDER;
            headerCells[0].BackgroundColor = headerColor;
            Chunk d = new Chunk("  Curriculum vitae");
            headerCells[1].AddElement(new Phrase(d));
            headerCells[1].Border = Rectangle.NO_BORDER;
            headerCells[2].Border = Rectangle.NO_BORDER;
            headerCells[2].BackgroundColor = headerColor;

            //Langeliai sudedami į headerį
            for (int i = 0; i < headerCells.Length; i++)
            {
                headerTable.AddCell(headerCells[i]);
            }

            //Header padaromas, kaip vienas langelis
            PdfPCell header = new PdfPCell(headerTable);
            header.BorderColor = BaseColor.WHITE;
            header.BorderColorRight = headerColor;
            header.BorderColorLeft = headerColor;

            return header;
        }

        public PdfPCell V2TempPersonalInfo(CVModel model, Font nameFont, Font profFont, Font simpleFont)
        {

            //Title, kur yra vardas ir kontaktinė info
            PdfPTable titleTable = new PdfPTable(2);
            titleTable.SplitLate = false;
            float[] titleWidths = new float[] { 3f, 2f };
            titleTable.SetWidths(titleWidths);
            PdfPCell[] titleCells = new PdfPCell[2];
            for (int i = 0; i < titleCells.Length; i++)
            {
                titleCells[i] = new PdfPCell();
            }
            //Title langeliai realizuojami kaip naujos lentelės, tai garantuoja gerą lygiavimą
            PdfPTable nameTable = new PdfPTable(1);
            nameTable.SplitLate = false;
            Field firstName = model.ContactInfo.Items.FirstOrDefault()[ContactInfoItem.FirstName];
            Field lastName = model.ContactInfo.Items.FirstOrDefault()[ContactInfoItem.LastName];
            Field dateodBirth = model.PersonalInfo.Items.FirstOrDefault()[PersonalInfoItem.DateOfBirth];
            string fullName = "";
            if (!string.IsNullOrEmpty(firstName.Value))
            {
                fullName = firstName.Value + " ";
            }
            if (!string.IsNullOrEmpty(lastName.Value))
            {
                fullName = fullName + lastName.Value;
            }
            PdfPCell name = TextOnly(fullName, nameFont);
            name.Border = Rectangle.NO_BORDER;
            PdfPCell birth = TextOnly(dateodBirth.Value, profFont);
            birth.Border = Rectangle.NO_BORDER;
            //Elementai sudedami į nauja lentelę, o lentelę į titleCellą
            nameTable.AddCell(name);
            nameTable.AddCell(birth);
            titleCells[0].AddElement(nameTable);

            //Kontaktinės info lentelė
            PdfPTable personalTable = new PdfPTable(2);
            personalTable.SplitLate = false;
            float[] personalWidths = new float[] { 1f, 8f };
            personalTable.SetWidths(personalWidths);

            //Emailas
            Field email = model.ContactInfo.Items.FirstOrDefault()[ContactInfoItem.Email];
            if (!string.IsNullOrEmpty(email.Value))
            {
                string emaillogo = "Images\\email.jpg";
                PdfPCell emailIma = V2TempImage(emaillogo);
                PdfPCell emailVal = TextOnly(email.Value, simpleFont);
                personalTable.AddCell(emailIma);
                personalTable.AddCell(emailVal);
            }

            //Adresas
            Field address = model.ContactInfo.Items.FirstOrDefault()[ContactInfoItem.Address];
            if (!string.IsNullOrEmpty(address.Value))
            {
                string addresslogo = "Images\\address.jpg";
                PdfPCell addressIma = V2TempImage(addresslogo);
                PdfPCell addressVal = TextOnly(address.Value, simpleFont);
                personalTable.AddCell(addressIma);
                personalTable.AddCell(addressVal);
            }

            //Telefonas
            Field phone = model.ContactInfo.Items.FirstOrDefault()[ContactInfoItem.Phone];
            if (!string.IsNullOrEmpty(phone.Value))
            {
                string phonelogo = "Images\\phone.jpg";
                PdfPCell phoneIma = V2TempImage(phonelogo);
                PdfPCell phoneVal = TextOnly(phone.Value, simpleFont);
                personalTable.AddCell(phoneIma);
                personalTable.AddCell(phoneVal);
            }

            //Facebook
            Field facebook = model.ContactInfo.Items.FirstOrDefault()[ContactInfoItem.Facebook];
            if (!string.IsNullOrEmpty(facebook.Value))
            {
                string fblogo = "Images\\facebook.jpg";
                PdfPCell fbIma = V2TempImage(fblogo);
                PdfPCell fbVal = TextOnly(facebook.Value, simpleFont);
                personalTable.AddCell(fbIma);
                personalTable.AddCell(fbVal);
            }

            //Į kitą titleTable cellą įdedami personalTable
            titleCells[1].AddElement(personalTable);
            //Nuimami borderiai
            titleCells[0].Border = Rectangle.NO_BORDER;
            titleCells[1].Border = Rectangle.NO_BORDER;

            //Celai sudedami į lentelę
            for (int i = 0; i < titleCells.Length; i++)
            {
                titleTable.AddCell(titleCells[i]);
            }

            //Lentelė paveršiama cell, dėl paprastumo
            PdfPCell title = new PdfPCell(titleTable);
            title.Border = Rectangle.NO_BORDER;

            return title;
        }

        public PdfPCell V2TempMain(CVModel model, System.Drawing.Image image, BaseColor mainColor, Font titleFont, Font simpleFont, Font skillsFont)
        {

            //Main dalis
            PdfPTable mainTable = new PdfPTable(2);
            mainTable.SplitLate = false;
            float[] mainWidths = new float[] { 38f, 73f };
            mainTable.SetWidths(mainWidths);
            PdfPCell[] mainCells = new PdfPCell[2];

            mainCells[0] = V2TempGreyTable(model, image, mainColor, titleFont, simpleFont);
            mainCells[1] = V2TempCareerBlock(model, titleFont, simpleFont, skillsFont, mainColor);


            //Sudeda mainCellus į main lentelę
            for (int i = 0; i < mainCells.Length; i++)
            {
                mainTable.AddCell(mainCells[i]);
            }

            //Sudeda visą main, į vieną cellą
            PdfPCell main = new PdfPCell(mainTable);
            main.Border = Rectangle.NO_BORDER;

            return main;
        }

        public PdfPCell V2TempGreyTable(CVModel model, System.Drawing.Image image, BaseColor mainColor, Font titleFont, Font simpleFont)
        {
            //Tuscias langelis main dalies
            PdfPCell emptyMain = new PdfPCell(new Phrase(" "));
            emptyMain.Border = Rectangle.NO_BORDER;
            emptyMain.BackgroundColor = mainColor;

            PdfPTable personalInfo = new PdfPTable(1);
            personalInfo.SplitLate = false;
            //Paveikslelis kolkas is serverio         
            Image jpg = getPhoto(image);
            if (jpg != null)
            {
                jpg.ScaleToFit(120f, 100f);
                jpg.Alignment = Element.ALIGN_CENTER;
                PdfPCell photo = new PdfPCell(jpg);
                photo.PaddingTop = 15f;
                photo.PaddingBottom = 15f;
                photo.HorizontalAlignment = 1;
                photo.BackgroundColor = mainColor;
                photo.Border = Rectangle.NO_BORDER;

                //Pridedama nuotrauka
                personalInfo.AddCell(photo);
            }

            //Summary
            PdfPCell summary = new PdfPCell();
            summary.BackgroundColor = mainColor;
            summary.Border = Rectangle.NO_BORDER;
            Field summ = model.PersonalInfo.Items.FirstOrDefault()[PersonalInfoItem.Summary];
            if (!string.IsNullOrEmpty(summ.Value))
            {
                PdfPTable summaryTable = new PdfPTable(1);
                PdfPCell summTitle = TextOnly(summ.Label, titleFont);
                summTitle.Border = Rectangle.NO_BORDER;
                summTitle.BackgroundColor = mainColor;
                PdfPCell summVal = TextOnly(summ.Value, simpleFont);
                summVal.Border = Rectangle.NO_BORDER;
                summVal.BackgroundColor = mainColor;
                summaryTable.AddCell(summTitle);
                summaryTable.AddCell(summVal);

                summary.AddElement(summaryTable);

            }

            //Pridedamas summary
            personalInfo.AddCell(emptyMain);
            personalInfo.AddCell(summary);
            personalInfo.AddCell(emptyMain);

            //Asmeninės savybės
            PdfPCell personalInternals = new PdfPCell();
            personalInternals.BackgroundColor = mainColor;
            personalInternals.Border = Rectangle.NO_BORDER;
            Field internals = model.PersonalInfo.Items.FirstOrDefault()[PersonalInfoItem.Interest];
            if (!string.IsNullOrEmpty(internals.Value))
            {
                //Splitinamos, vėliau reiks multilane tai keisis
                String[] values = internals.Value.Split(',');
                PdfPTable internalsTable = new PdfPTable(1);
                PdfPCell internalsTitle = TextOnly(internals.Label, titleFont);
                internalsTitle.Border = Rectangle.NO_BORDER;
                internalsTitle.BackgroundColor = mainColor;
                internalsTable.AddCell(internalsTitle);
                foreach (string value in values)
                {
                    //Istrina perteklinius tarpus
                    string remaked = value.Trim();
                    PdfPCell persInte = TextOnly(remaked, simpleFont);
                    persInte.Border = Rectangle.NO_BORDER;
                    persInte.BackgroundColor = mainColor;

                    //Sudedam į lentelę
                    internalsTable.AddCell(persInte);
                }

                //Sudedam į 1 cellą
                personalInternals.AddElement(internalsTable);

            }
            //Pridedam į main lentelę
            personalInfo.AddCell(personalInternals);

            //Priskiriam vienam cellui
            PdfPCell toReturn = new PdfPCell();
            toReturn.AddElement(personalInfo);

            //Atitraukiam nuo krašto
            toReturn.PaddingLeft = 25f;
            toReturn.Border = Rectangle.NO_BORDER;

            return toReturn;
        }

        public PdfPCell V2TempCareerBlock(CVModel model, Font titleFont, Font simpleFont, Font skillsFont, BaseColor lineColor)
        {
            //Tuscias langelis
            PdfPCell empty = new PdfPCell(new Phrase(" "));
            empty.Border = Rectangle.NO_BORDER;

            //Linija
            Paragraph pa = new Paragraph(new Chunk(new iTextSharp.text.pdf.draw.LineSeparator(0.0F, 100.0F, lineColor, Element.ALIGN_LEFT, 1)));

            PdfPTable career = new PdfPTable(2);
            career.SplitLate = false;
            float[] careerWidths = { 1f, 3f };
            career.SetWidths(careerWidths);

            //Pakeisti, kai eis normaliai suvesti darbus
            PdfPCell careerTitle = new PdfPCell(new Phrase(model.CareerInfo.Name, titleFont));
            careerTitle.Border = Rectangle.NO_BORDER;
            careerTitle.HorizontalAlignment = 0;
            PdfPCell line = new PdfPCell(pa);
            line.Border = Rectangle.NO_BORDER;
            line.HorizontalAlignment = 1; //centrinis lygiavimas 
            career.AddCell(careerTitle);
            career.AddCell(line);
            renderV2TemplateCareer(model.CareerInfo, career, simpleFont);
            renderV2Skills(model.SkillsInfo, titleFont, skillsFont, career, line, simpleFont);
            renderV2Education(model.EducationInfo, titleFont, simpleFont, career, line);

            //Maincell priskiria visą carrer
            PdfPCell toReturn = new PdfPCell();
            toReturn.AddElement(career);
            toReturn.Border = Rectangle.NO_BORDER;

            return toReturn;

        }

        public void renderV2TemplateCareer(CareerInfo careerInfo, PdfPTable career, Font simpleFont)
        {
            //Tuscias langelis
            PdfPCell empty = new PdfPCell(new Phrase(" "));
            empty.Border = Rectangle.NO_BORDER;

            foreach (var item in careerInfo.Items)
            {

                Field startDate = item[CareerInfoItem.Start];
                if (!string.IsNullOrEmpty(startDate.Value))
                {
                    PdfPCell startCell = new PdfPCell(new Phrase(startDate.Value, simpleFont));
                    startCell.Border = Rectangle.NO_BORDER;
                    career.AddCell(startCell);
                }
                //Deda tuščius dėl gero lygiavimo
                else career.AddCell(empty);
                Field company = item[CareerInfoItem.CompanyName];
                if (!string.IsNullOrEmpty(company.Value))
                {
                    PdfPCell companyCell = new PdfPCell(new Phrase(company.Value, simpleFont));
                    companyCell.Border = Rectangle.NO_BORDER;
                    career.AddCell(companyCell);
                }
                else career.AddCell(empty);
                Field endDate = item[CareerInfoItem.End];
                if (!string.IsNullOrEmpty(endDate.Value))
                {
                    PdfPCell endCell = new PdfPCell(new Phrase(endDate.Value, simpleFont));
                    endCell.Border = Rectangle.NO_BORDER;
                    career.AddCell(endCell);
                }
                else career.AddCell(empty);
                Field job = item[CareerInfoItem.JobTitle];
                if (!string.IsNullOrEmpty(job.Value))
                {
                    PdfPCell jobCell = new PdfPCell(new Phrase(job.Value, simpleFont));
                    jobCell.Border = Rectangle.NO_BORDER;
                    career.AddCell(jobCell);
                }
                else career.AddCell(empty);
                career.AddCell(empty);

                Field description = item[CareerInfoItem.Description];
                if (!string.IsNullOrEmpty(description.Value))
                {
                    PdfPCell descCell = new PdfPCell(new Phrase(description.Value, simpleFont));
                    descCell.Border = Rectangle.NO_BORDER;
                    career.AddCell(descCell);
                }
                else career.AddCell(empty);
                //Tuščia eilutė
                career.AddCell(empty);
                career.AddCell(empty);
            }
        }

        public void renderV2Skills(SkillsInfo skillsInfo, Font titleFont, Font skillsFont, PdfPTable career, PdfPCell line, Font simpleFont)
        {
            //Tuscias langelis
            PdfPCell empty = new PdfPCell(new Phrase(" "));
            empty.Border = Rectangle.NO_BORDER;

            PdfPCell skillsTitle = new PdfPCell(new Phrase(skillsInfo.Name, titleFont));
            skillsTitle.Border = Rectangle.NO_BORDER;
            skillsTitle.HorizontalAlignment = 0;
            PdfPCell skillsValues = new PdfPCell();
            skillsValues.Border = Rectangle.NO_BORDER;
            PdfPTable mainT = new PdfPTable(2);
            mainT.SplitLate = false;
            int counter = 0;
            foreach (var sectionItem in skillsInfo.Items)
            {
                Field field = sectionItem[SkillsInfoItem.Skill];

                if (!string.IsNullOrEmpty(field.Value) && field.Value.All(char.IsDigit))
                {
                    counter++;
                    PdfPCell mainC = new PdfPCell();
                    PdfPTable skillsTable = new PdfPTable(1);
                    skillsTable.SplitLate = false;
                    PdfPCell skillName = new PdfPCell(new Phrase(field.Label, skillsFont));
                    skillName.Border = Rectangle.NO_BORDER;
                    PdfPCell value = new PdfPCell();
                    value.Border = Rectangle.NO_BORDER;
                    PdfPTable draw = new PdfPTable(2);
                    draw.SplitLate = false;
                    //Paima value ir nustato widths, tada žino kiek nuspalvint
                    int mark = Convert.ToInt16(field.Value);
                    float[] drawWidths = { mark, 100 - mark };
                    draw.SetWidths(drawWidths);
                    PdfPCell black = new PdfPCell(new Phrase(" "));
                    black.BackgroundColor = BaseColor.BLACK;
                    PdfPCell white = new PdfPCell(new Phrase(" "));
                    white.BackgroundColor = BaseColor.WHITE;
                    //Nuspalvina draw lentelę           
                    draw.AddCell(black);
                    draw.AddCell(white);
                    //Sudeda ją į vieną cell
                    value.AddElement(draw);
                    //Sujunge pavadinimą ir reikšmę
                    skillsTable.AddCell(skillName);
                    skillsTable.AddCell(value);
                    //Prideda į skillsTable
                    mainC.AddElement(skillsTable);
                    mainC.HorizontalAlignment = 1;
                    mainC.Border = Rectangle.NO_BORDER;
                    mainT.AddCell(mainC);
                }

            }
            if(counter % 2 == 1)
            {
                mainT.AddCell(empty);
            }
            if (counter > 0)
            {
                career.AddCell(skillsTitle);
                career.AddCell(line);
                career.AddCell(empty);
            }
            else career.AddCell(empty);
            //Skills table padaro 1 cellą
            skillsValues.AddElement(mainT);
            //Pridedą jį į carrer lentelę
            career.AddCell(skillsValues);
            //isrenderina,jei skills ne sk.
            foreach (var sectionItem in skillsInfo.Items)
            {
                Field field = sectionItem[SkillsInfoItem.Skill];

                if (!string.IsNullOrEmpty(field.Value) && !field.Value.All(char.IsDigit))
                {
                    PdfPCell skillName = new PdfPCell(new Phrase(field.Label + ":", simpleFont));
                    skillName.Border = Rectangle.NO_BORDER;
                    PdfPCell skillvalue = new PdfPCell(new Phrase(field.Value, simpleFont));
                    skillvalue.Border = Rectangle.NO_BORDER;
                    career.AddCell(skillName);
                    career.AddCell(skillvalue);
                }
            }
            career.AddCell(empty);
            career.AddCell(empty);

        }

        public void renderV2Education(EducationInfo educationInfo, Font titleFont, Font simpleFont, PdfPTable career, PdfPCell line)
        {
            //Tuscias langelis
            PdfPCell empty = new PdfPCell(new Phrase(" "));
            empty.Border = Rectangle.NO_BORDER;
            int counter = 0;
            PdfPCell educationTitle = new PdfPCell(new Phrase(educationInfo.Name, titleFont));
            educationTitle.Border = Rectangle.NO_BORDER;

            PdfPCell educationValues = new PdfPCell();
            educationValues.Border = Rectangle.NO_BORDER;
            PdfPTable educT = new PdfPTable(2);
            educT.SplitLate = false;
            float[] educTWidth = { 1f, 1f };
            //Ciklas testavimui,nes nera galimybes ivesti 3 skirtingu

            foreach (var sectionItem in educationInfo.Items)
            {
                foreach (Field field in sectionItem.Values)
                {
                    if (!string.IsNullOrEmpty(field.Value))
                    {
                        counter++;
                        PdfPCell eduValue = new PdfPCell(new Phrase(field.Value, simpleFont));
                        eduValue.Border = Rectangle.NO_BORDER;
                        eduValue.HorizontalAlignment = 1;
                        educT.AddCell(eduValue);
                    }
                    else
                        educT.AddCell(empty);
                }
                educT.AddCell(empty);
                educT.AddCell(empty);
            }
            if (counter > 0)
            {
                career.AddCell(educationTitle);
                career.AddCell(line);
                career.AddCell(empty);
            }
            else career.AddCell(empty);

            educationValues.AddElement(educT);
            career.AddCell(educationValues);
        }

        public PdfPCell V2TempImage(string projectPath)
        {
            string path = Path.Combine(System.Web.HttpContext.Current.Server.MapPath("~"), projectPath);
            Image image = Image.GetInstance(path);
            image.ScaleToFit(20f, 20f);
            PdfPCell retIma = new PdfPCell(image);
            retIma.HorizontalAlignment = 1;
            retIma.Border = Rectangle.NO_BORDER;
            retIma.PaddingBottom = 3f;
            retIma.PaddingRight = 3f;
            return retIma;
        }

        public PdfPCell TextOnly(string text, Font font)
        {
            PdfPCell value = new PdfPCell(new Phrase(text, font));
            value.Border = Rectangle.NO_BORDER;
            return value;
        }

        public PdfPCell TextOnly(string text)
        {
            PdfPCell value = new PdfPCell(new Phrase(text));
            value.Border = Rectangle.NO_BORDER;
            return value;
        }


        public string GetFileName(Field firstName, Field lastName, string extension)
        {
            string name;
            if (string.IsNullOrEmpty(firstName?.Value) && !string.IsNullOrEmpty(lastName?.Value))
            {
                name = lastName.Value + extension;
                return name;
            }
            if (string.IsNullOrEmpty(lastName?.Value) && !string.IsNullOrEmpty(firstName?.Value))
            {
                name = firstName.Value + extension;
                return name;
            }
            if (string.IsNullOrEmpty(firstName?.Value) && string.IsNullOrEmpty(lastName?.Value))
            {
                name = "generatedCV" + extension;
                return name;
            }
            name = firstName.Value + "_" + lastName.Value + extension;
            return name;
        }
    }


}