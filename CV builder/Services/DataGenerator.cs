using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CV_builder.Interfaces;
using CV_builder.Models;
using CV_builder.Infrastructure;

namespace CV_builder.Services
{
    public class DataGenerator : IDataGenerator
    {
        public CVModel GenerateTestData()
        {
            ContactInfo contactInfo = new ContactInfo()
            {
                Items = new List<ContactInfoItem>()
                {
                    new ContactInfoItem()
                    {
                        {
                            ContactInfoItem.FirstName, new Field()
                            {
                                Id = 1,
                                Label = "First name",
                                Type = FieldTypes.SingleLiner,
                                Mandatory = true
                            }
                        },
                        {
                            ContactInfoItem.LastName, new Field()
                            {
                                Id = 2,
                                Label = "Last name",
                                Type = FieldTypes.SingleLiner,
                                Mandatory = true
                            }
                        },
                        {
                            ContactInfoItem.Email, new Field()
                            {
                                Id = 4,
                                Label = "Email",
                                Type = FieldTypes.SingleLiner,
                                Mandatory = true
                            }
                        },
                        {
                            ContactInfoItem.Address, new Field()
                            {
                                Id = 5,
                                Label = "Address",
                                Type = FieldTypes.SingleLiner,
                                Mandatory = false
                            }
                        },
                        {
                            ContactInfoItem.Phone, new Field()
                            {
                                Id = 6,
                                Label = "Phone",
                                Type = FieldTypes.Tel,
                                Mandatory = true
                            }
                        },
                        {
                            ContactInfoItem.Facebook, new Field()
                            {
                                Id = 7,
                                Label = "Facebook",
                                Type = FieldTypes.SingleLiner,
                                Mandatory = false
                            }
                        }
                    }
                }
            };
            PersonalInfo personalInfo = new PersonalInfo()
            {
                Items = new List<PersonalInfoItem>()
                {
                    new PersonalInfoItem()
                    {
                        {
                            PersonalInfoItem.Photo, new Field()
                            {
                                Id = 1,
                                Label = "Nuotrauka",
                                //Reik image, bet dar neveikia
                                Type = FieldTypes.File,
                                Mandatory = false
                            }
                        },
                        {
                            PersonalInfoItem.Summary, new Field()
                            {
                                Id = 2,
                                Label = "Summary",
                                //Reik multilane, bet dar neveikia
                                Type = FieldTypes.MultiLiner,
                                Mandatory = false
                            }
                        },
                        {
                            PersonalInfoItem.Interest, new Field()
                            {
                                Id = 3,
                                Label = "Personal internals",
                                //Reik multilane, bet dar neveikia
                                Type = FieldTypes.MultiLiner,
                                Mandatory = false
                            }
                        },
                        {
                            PersonalInfoItem.DateOfBirth, new Field()
                            {
                                Id = 4,
                                Label = "Date of birth",
                                Type = FieldTypes.Date,
                                Mandatory = true

                            }
                        }
                    }

                }
            };
            CareerInfo careerInfo = new CareerInfo()
            {
                Items = new List<CareerInfoItem>()
                {
                    new CareerInfoItem()
                    {
                        //Reikia suglaovti, kaip teisingai lesiti ivesti pvz 3 darbovietes
                        {
                            CareerInfoItem.Start, new Field()
                            {
                                Id = 1,
                                //Jauciu, kaip Text paliksim, tik gal pasiūlysim pavyzdį duomenų įvedimo xxxx-xxxx
                                Label = "Year interval begining",
                                Type = FieldTypes.Date,
                                Mandatory = false
                            }
                        },
                        {
                            CareerInfoItem.End, new Field()
                            {
                                Id = 1,
                                //Jauciu, kaip Text paliksim, tik gal pasiūlysim pavyzdį duomenų įvedimo xxxx-xxxx
                                Label = "Year interval ending",
                                Type = FieldTypes.Date,
                                Mandatory = false
                            }
                        },
                        {
                            CareerInfoItem.CompanyName, new Field()
                            {
                                Id = 2,
                                Label = "Company name",
                                Type = FieldTypes.SingleLiner,
                                Mandatory = false
                            }
                        },
                        {
                            CareerInfoItem.JobTitle, new Field()
                            {
                                Id = 3,
                                Label = "Job title",
                                Type = FieldTypes.SingleLiner,
                                Mandatory = false
                            }
                        },
                        {
                            CareerInfoItem.Description, new Field()
                            {
                                Id = 4,
                                //Reik multilane, bet dar neveikia
                                Label = "Description",
                                Type = FieldTypes.MultiLiner,
                                Mandatory = false
                            }
                        }
                    }
                }
            };
            EducationInfo educationInfo = new EducationInfo()
            {
                Items = new List<EducationInfoItem>()
                {
                    new EducationInfoItem()
                    {
                        //Reikia vesti skaicius nuo 0 iki 100
                        {
                            EducationInfoItem.Duration, new Field()
                            {
                                Id = 1,
                                Label = "Duration",
                                //Jauciu, kaip Text paliksim, tik gal pasiūlysim pavyzdį duomenų įvedimo xxxx-xxxx
                                Type = FieldTypes.SingleLiner,
                                Mandatory = false
                            }
                        },
                        {
                            EducationInfoItem.End, new Field()
                            {
                                Id = 1,
                                Label = "Year interval ending",
                                //Jauciu, kaip Text paliksim, tik gal pasiūlysim pavyzdį duomenų įvedimo xxxx-xxxx
                                Type = FieldTypes.Date,
                                Mandatory = false
                            }
                        },
                        {
                            EducationInfoItem.Course, new Field()
                            {
                                Id = 2,
                                Label = "Course",
                                Type = FieldTypes.SingleLiner,
                                Mandatory = false
                            }
                        },
                        {
                            EducationInfoItem.Institution, new Field()
                            {
                                Id = 3,
                                Label = "Name of institution",
                                Type = FieldTypes.SingleLiner,
                                Mandatory = false
                            }
                        }
                    }
                }
            };
            SkillsInfo skillsInfo = new SkillsInfo()
            {
                Items = new List<SkillsInfoItem>()
                {
                    new SkillsInfoItem()
                    {
                        {
                            SkillsInfoItem.Skill, new Field()
                            {
                                Id = 1,
                                Label = "Enter your skill",
                                //Reik apibrezt,kad nuo 0 iki 100
                                Type = FieldTypes.SingleLiner,
                                Mandatory = false
                            }
                        }
                    }
                }
            };

            CVModel CV = new CVModel();
            CV.ContactInfo = contactInfo;
            CV.CareerInfo = careerInfo;
            CV.EducationInfo = educationInfo;
            CV.PersonalInfo = personalInfo;
            CV.SkillsInfo = skillsInfo;
            CV.FormTarget = "/Builder/GenerateDocument";


            return CV;
        }
    }
}