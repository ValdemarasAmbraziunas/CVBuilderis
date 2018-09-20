namespace CV_builder.Models
{
    public class CVModel
    {
        public PersonalInfo PersonalInfo { get; set; }
        public EducationInfo EducationInfo { get; set; }
        public SkillsInfo SkillsInfo { get; set; }
        public CareerInfo CareerInfo { get; set; }
        public ContactInfo ContactInfo { get; set; }
        public string FormTarget { get; set; }
    }
}