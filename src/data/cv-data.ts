export interface Activity {
  title: string;
  organization: string;
  date: string;
  description: string;
  type: 'conference' | 'workshop' | 'project' | 'award' | 'other';
}

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  link?: string;
  type: 'journal' | 'conference' | 'preprint' | 'book' | 'other';
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  location: string;
  summary: string;
  profilePhoto?: string;
}

// Sample data - replace with your actual information
export const personalInfo: PersonalInfo = {
  name: "Pronoy Dutta",
  title: "Post-Doctoral Researcher",
  email: "contactpronoy@gmail.com",
  phone: "+43 681 10472300",
  linkedin: "linkedin.com/in/pronoydutta",
  github: "github.com/PronoyDutta",
  website: "scholar.google.com/citations?user=x0fnNYkAAAAJ&hl=en&authuser=1",
  location: "Salzburg, Austria",
  summary: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन| Passionate software engineer with 8+ years of experience in full-stack development and machine learning research. Proven track record of leading high-impact projects and publishing cutting-edge research in top-tier venues.",
  profilePhoto: "https://github.com/PronoyDutta/Images/blob/main/PXL_20230304_103229653.PORTRAIT%20-%20Copy.jpg"
};

export const recentActivities: Activity[] = [
  {
    title: "Li-S Battery Workshop",
    organization: "Fraunhofer IWS Dresden, Germany",
    date: "November 2024",
    description: "Poster presentation on \"Understamding the Effects of Polysulfide Solubility on Quasi Solid State S/Li2S Conversion in LiS Batteries\"",
    type: "workshop"
  },
  {
    title: "Efficient Li-S Batteries",
    organization: "University of Salzburg",
    date: "April 2025",
    description: "Attempting the next steps: Bulk Utilisation of Sulfur in Li-S Batteries ",
    type: "mentoring"
  },
  {
    title: "Open Source Contribution",
    organization: "University of Salzburg",
    date: "January 2024",
    description: "Python pipeline on SWAXS data analysis for operando scattering experiments with LiS batteries",
    type: "project"
  },
  {
    title: "CPM Open Lab Day",
    organization: "University of Salzburg",
    date: "June 2025",
    description: "Organised hands on experience on Zn hybrid battery assembly and testing for School Students",
    type: "workshop"
  }
];

export const publications: Publication[] = [
  {
    title: "Activating Ion Channels in Collapsed Hydrogel Derived Densified Mxene Films with Cellulose Nanofibers to Overcome the Areal vs. Volumetric Capacitance Trade-Off",
    authors: ["Pronoy Dutta", "Sujit Kumar Deb", "Uday Narayan Maiti", "et. al."],
    venue: "Small (Wiley)",
    year: "2024",
    link: "https://onlinelibrary.wiley.com/doi/full/10.1002/smll.202400119",
    type: "journal"
  },
  {
    title: "Electric Field Guided Fast and Oriented Assembly of MXene into Scalable Pristine Hydrogels for Customized Energy Storage and Water Evaporation Applications",
    authors: ["Pronoy Dutta", "Sujit Kumar Deb", "Uday Narayan Maiti", "et. al."],
    venue: "Advanced Functional Materials",
    year: "2022",
    link: "https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/adfm.202204622",
    type: "journal"
  },
  {
    title: "Freestanding MXene-hydrogels prepared via critical density-controlled self-assembly: high-performance energy storage with ultrahigh capacitive vs. diffusion-limited contribution",
    authors: ["Pronoy Dutta", "Amalika Patra", "Uday Narayan Maiti", "et. al."],
    venue: "Journal of Materials Chemistry A",
    year: "2021",
    link: "https://pubs.rsc.org/en/content/articlehtml/2021/ta/d1ta07172f",
    type: "journal"
  },
  {
    title: "Graphene aided gelation of MXene with oxidation protected surface for supercapacitor electrodes with excellent gravimetric performance",
    authors: ["Pronoy Dutta", "Anirban Sikdar", "Uday Narayan Maiti", "et. al."],
    venue: "Carbon",
    year: "2020",
    link: "https://www.sciencedirect.com/science/article/pii/S0008622320307016",
    type: "journal"
  },

];

export const experience: Experience[] = [
  {
    title: "Postoctoral Research Associate",
    company: "Department of Chemistry and Physics of Materials, University of Salzburg",
    period: "2023 - Present",
    location: "Salzburg, Austria",
    description: [
      "Investigated quasi-solid state and standard solid-liquid-solid conversion mechanisms in Li-S battery with operando techniques.",
      "Designed and conducted operando small and wide-angle X-ray scattering (SAXS/WAXS) experiments",
      "Applied and developed strategies for Cryo-TEM with electron energy loss spectroscopy (EELS) for successful characterization of highly sensitive discharge-charge products in Li-sulfur batteries",
      "Mentored graduate students working in Li-ion batteries"
    ],
    technologies: ["SWAXS", "cryo-TEM", "Python", "Cathode preparation", "battery cell assembly", "electrochemistry"]
  },
  {
    title: "Research Scholar",
    company: "Indian Institute of Technology Guwahati",
    period: "2017 - 2023",
    location: "Guwahati, India",
    description: [
      "Developed self-assembling strategies for functional macrostructures with two-dimensional materials for supercapacitive applications",
      "Mastered nanomaterials systhesis (MXene, graphene and related nanomaterials), and their application in supercapacitors",
      "Applied Density Functional Theory (DFT) methods to transition metal chalcogenides and single-atom electrocatalysts to evaluate the electronic origin of catalytic performance",
      "Published four peer-reviewed journals and submitted one patent application "
    ],
    technologies: ["Supercapacitors", "Nanomaterial Synthesis", "DFT", "microcontroller programming"]
  }
];

export const education: Education[] = [
  {
    degree: "Ph.D. in Physics",
    institution: "Indian Institute of Technology Guwahati",
    period: "2017 - 2023",
    location: "Guwahati, India",
    details: [
      "Thesis: 'Tunable Ordered Assembly of MXene and Related Nanomaterials for Scalable Energy Applications'"
    ],
    link: "https://gyan.iitg.ac.in/items/6791fbaf-a77b-4987-b092-85e8fbce337e"
  },
  {
    degree: "M.Sc. in Physics",
    institution: "University of North Bengal",
    period: "2015 - 2017",
    location: "West Bengal, India",
    details: [
      "Specialization in Condensed Matter Physics"
    ]
  },
  {
    degree: "B.Sc. in Physics",
    institution: "Ananda Chandra College",
    period: "2012 - 2015",
    location: "West Bengal, India",
  }
];

export const skills: Skill[] = [
  {
    category: "Charecterization Techniques",
    items: ["SAXS/WAXS", "cryo-TEM", "SEM", "XPS", "Raman", "DSC-TGA", "BET"]
  },
  {
    category: "Electrochemical Techniques",
    items: ["CV", "GCD", "EIS", "GITT", "Biologic", "Neware", "Ametek" ]
  },
  {
    category: "Tools & Technologies",
    items: ["DFT", "Python", "Fortran", "Blender"]
  }
  // {
  //   category: "Specialties",
  //   items: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "MLOps"]
  // }
];