export interface Story {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: 'research' | 'blog' | 'project' | 'thoughts';
  tags: string[];
  readTime: string;
  published: boolean;
}

export const stories: Story[] = [
  {
    id: "unlocking-solid-electrolyte-lis-batteries",
    title: "Unlocking the Potential of Solid Electrolyte Li-S Batteries",
    excerpt: "A behind-the-scenes look at my research into quasi-solid-state lithium-sulfur batteries and what it could mean for next-generation energy storage.",
    content: `
# Unlocking the Potential of Solid Electrolyte Li-S Batteries

The journey began with a question: **how can we improve the cyclability and safety of lithium-sulfur (Li-S) batteries?** Traditional Li-S systems suffer from polysulfide shuttling and poor lithium utilization, especially in liquid electrolytes.

## The Pivot to Solid Electrolytes

After months of unstable results, I explored the use of **quasi-solid-state electrolytes**—a blend of polymers and ionic conductors—to suppress shuttle effects while maintaining ionic mobility. Initial trials were disappointing, but incremental tweaks in electrolyte composition changed the game.

## In-Situ SAXS & Cryo-TEM Breakthroughs

Real insights came from **in-situ small-angle X-ray scattering (SAXS)** and **cryo-TEM**. These techniques revealed how sulfur morphology evolved during cycling, confirming our hypothesis that a denser, more stable interphase could form with the right electrolyte.

## Looking Ahead

This work shows how careful material design and advanced characterization can reshape battery performance. The road to commercial solid-state Li-S cells is still long, but this was a meaningful step forward.

*This study was part of the QSS-LiS project supported by the Austrian Science Fund.*
    `,
    date: "2024-05-12",
    category: "research",
    tags: ["Lithium-Sulfur", "Solid Electrolyte", "Battery Research", "SAXS", "Cryo-TEM"],
    readTime: "9 min read",
    published: true
  },
  {
    id: "building-better-mxene-supercaps",
    title: "Building Better Supercapacitors with MXene Materials",
    excerpt: "Exploring how 2D MXene nanosheets are transforming the world of high-power energy storage.",
    content: `
# Building Better Supercapacitors with MXene Materials

Supercapacitors have always intrigued me for their power density—but the low energy density held them back. Enter **MXenes**: 2D transition metal carbides with exceptional conductivity and tunable surface chemistry.

## From Flakes to Function

My first synthesis of Ti₃C₂ MXene felt like a chemical art project. The challenge was ensuring high-quality delamination and avoiding oxidation during storage. After many failed attempts, I developed a protocol using argon bubbling and DMSO intercalation that preserved flake integrity.

## Electrochemical Surprises

When assembled into symmetric supercapacitor cells, the MXene electrodes delivered **over 300 F/g** with outstanding rate capability. What surprised me most was their **pseudocapacitive behavior**—a feature typically seen in faradic materials.

## Scaling the Vision

I’m now working on MXene-graphene hybrids to combine high conductivity with better structural stability. The future looks promising for hybrid flexible electronics and wearable energy devices.

*This work was supported by the EU Horizon 2020 framework.*
    `,
    date: "2024-06-08",
    category: "project",
    tags: ["MXene", "Supercapacitor", "2D Materials", "Energy Storage", "Flexible Devices"],
    readTime: "10 min read",
    published: true
  }
];

export const categories = [
  { id: 'all', name: 'All Stories', color: 'bg-gray-100 text-gray-800' },
  { id: 'research', name: 'Research', color: 'bg-blue-100 text-blue-800' },
  { id: 'blog', name: 'Blog', color: 'bg-green-100 text-green-800' },
  { id: 'project', name: 'Projects', color: 'bg-purple-100 text-purple-800' },
  { id: 'thoughts', name: 'Thoughts', color: 'bg-orange-100 text-orange-800' }
];
