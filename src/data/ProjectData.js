export const projectData = [
    {
        active: true,
        type: "graphic design",
        id: "scad15",
        title: "SCAD Craft Seal",
        year: 2016,
        client: "SCAD",
        description: "In 2015 I joined Savannah College of Art and Design as a designer, primarily responsible front-end web design for HR. I also worked with creative driection to design branding assets for the athletics department, student orientation materials, and staff on-boarding materials ",
        link: "https://www.scadmoa.org/about/william-and-ellen-craft",
        images: [
            {
                uuid: "dc681530-1009-4180-a608-ed200c003b0b",
                alt: "The William and Ellen Craft Seal installed in SCAD MOA",
                title: "William and Ellen Craft Seal",
                hero: true,
                process: true,
                large: true,
                x: 3,
                y: 2
            },
            {
                uuid: "ae0cecdb-d32e-4ed5-adf4-537ab8611c66",
                alt: "3D illustration in Cinema 4D",
                title: "William and Ellen Craft Seal",
                hero: false,
                process: true,
                large: false,
                x: 1,
                y: 1
            },
            {
                uuid: "9ab1f276-46e8-478c-ba3f-3183c7949f07",
                alt: "William and Ellen craft pin design for SCAD MOA",
                text: "William and Ellen Craft Pin",
                hero: false,
                process: true,
                large: false,
                x: 1,
                y: 1
            },
            {
                uuid: "8ccd08a2-6d5a-4f38-a8e1-b753c16b8093",
                alt: "William and Ellen craft production file",
                title: "William and Ellen Craft Vector",
                hero: false,
                process: true,
                large: false,
                x: 1,
                y: 1
            },
        ],
        tools: [
            "Cinema 4D",
            "Adobe Illustrator"
        ],
        video:
        {
            host: "youtube",
            url: "https://youtu.be/OgyLErA-uMM",
            embed: `<iframe width="560" height="315" src="https://www.youtube.com/embed/OgyLErA-uMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        }
    },
    {
        type: "ui",
        id: "breaWeb22",
        active: true,
        title: "Breaviragh.com",
        year: 2022,
        client: "Brea Viragh",
        description: "USA Today Bestselling romance author, Brea Viragh, commissioned a static website that could be hosted for free. I designed the site from the ground up. Initial wireframes and prototypes were created in Figma. The page was scripted in static HTML, CSS and Javascript",
        link: "https://www.scadmoa.org/about/william-and-ellen-craft",
        images: [
            {
                uuid: "b616c9e9-cf98-48c1-94a3-b49713d12f53",
                alt: "Brea Viragh desktop website landing page",
                title: "Brea Viragh site",
                hero: true,
                process: false,
                large: true,
                x: 16,
                y: 9
            },
            {
                uuid: "3b52e4c7-f7a5-4ff4-8a67-0553f267381f",
                alt: "Brea Viragh mobile website landing page",
                title: "Brea Viragh site",
                hero: false,
                process: false,
                large: true,
                x: 9,
                y: 16
            },
        ],
        tools: [
            "Figma",
            "Javascript",
            "HTML",
            "CSS",
            "git"
        ],
    },
    /*
    {
        type: "illustration",
        id: "illustration15",
        active: false,
        title: "Illustrations",
        year: 2023,
        client: "multiple",
        description: "T-shirt designs, posters, book covers, and editorial illlustrations. I always enjoy projects that allow for more drawing and creativity. Various clients have commissioned me for posters over the years, including SCAD, Charleston Family Magazine, ih8war.com, and more",
        heroData: {
            size: "scale_crop",
            position: "center",
            mode: "smart_objects"
        },
        processData: {
            size: "resize",
            dimensions: "1080x",
            position: "center"
        },
        images: [
            "708929e5-f3e2-4227-928a-e760e8898856",
            "1c8739be-4004-452c-afb9-2e410edd44f3",
            "fea83242-f44c-4f7c-9471-3239775dfec6",
            "a8c6e6ad-6211-49d7-b843-6670f460b8cb",
            "cc744753-640e-42a3-88a9-5a66a9ef1303",
            "8e49b274-3286-4edd-90ce-9de679829a1e",
            "7f758124-62df-410d-b986-49f8ab675b9f",
            "ab1b4875-6d09-49ca-a291-5bd772010e85",
            "74d6e51e-92db-4cf8-a860-07722ce0065c",
            "1e760577-b62f-4135-b833-5fd9ef5ec9a0"
        ],
        tools: [
            "Affinity Designer",
            "Affinity Publisher",
            "HTML",
            "CSS"
        ],
        tags: [
            "graphic design",
            "3D",
            "Bronze",
            "SCAD"
        ]
    },
    {
        type: "3D",
        id: "craft16",
        title: "William and Ellen Craft Seal",
        year: 2016,
        client: "SCAD Museum of Art",
        description: "In 2016 the Savannah College of Art and Design Museum of Modern Art in the old Savannah train station commissioned this plaque. The plaque commemorates the daring plight of 2 slaves who once escaped through the train station. Check out the full press release on <a href'https://bit.ly/2sRsKQl'>SCAD's Blog</a>",
        heroData: {
            crop: "scale_crop",
            position: "right",
            mode: "smart_objects"
        },
        images: [
            "dc681530-1009-4180-a608-ed200c003b0b",
            "ae0cecdb-d32e-4ed5-adf4-537ab8611c66",
            "9ab1f276-46e8-478c-ba3f-3183c7949f07",
            "40f4096c-1ea1-4e64-8d20-a3e7a4412009"
        ],
        media: [
            {
                url: "",
                alt: "SCAD MOA Craft Seal",
                description: "",
                format: "3:2"
            },
            {
                url: "https://ucarecdn.com/9f592c8d-6e0e-4dcd-a71f-08235efc1058",
                alt: "SCAD Museom of Art",
                description: "",
                format: "3:2"
            }
        ],
        tools: [
            "Cinema 4D",
            "Adobe Illustrator",
            "CNC Machine"
        ],
        tags: [
            "graphic design",
            "3D",
            "Bronze",
            "SCAD"
        ]
    },
    {
        type: "3D",
        id: "neon19",
        title: "neon",
        year: 2019,
        client: "Private",
        description: "In 2019 I was commissioned to build a procedural lighting system. This Houdini engine asset takes any 2D bezier curve or spline input and generates a 3D neon light. The asset also has controls for animating the light color and pattern.",
        images: [
            "6623b4d5-b1b5-4821-83ba-622afba991ba",
            "7f794956-d3cf-49e5-bf6e-f9e6f0cb6092",
            "38848335-d526-47fb-89c4-90d59e969cb2"

        ],
        tools: [
            "Houdini"
        ],
        tags: [
            "3D",
            "motion design",
            "procedural"
        ]
    },
    {
        type: "3D",
        id: "carrier17",
        title: "Carrier",
        year: 2017,
        client: "Private",
        description: "Videogame asset",
        images: [
            "389eecd0-be02-47fc-906a-acc41528ca01",
            "50a8c587-57f6-458d-a6ef-3e936f0763e2",
            "4efc85dd-6100-47d5-b2d8-95fcaa2c5a70",
            "c882f6e7-0efb-4617-9904-13cc13cf6e39",
            "4defab77-23d8-4cc8-b2c4-ccd31c60cff0",
            "061a0f26-0f50-42cd-b801-2f0e0de858e8",
            "173d3f41-9aca-432b-a999-a4b7757008f9"
        ],
        tools: [
            "Maya",
            "Unreal Engine",
        ],
        tags: [
            "3D",
            "game",
            "asset",
            "real time"
        ]
    },
    {
        type: "3D",
        id: "tortoise18",
        title: "Tortoise",
        year: 2018,
        client: "Private",
        description: "Videogame asset",
        images: [
            "2e0ff582-7119-4035-907c-106d2d59792d",
            "5ea09de6-b6e9-40c5-ab8e-208157e0f83d",
            "284303b7-d163-4712-9794-64331459bfd0",
            "bfef1e19-6d68-41d0-a2d2-886f70e10f53",
        ],
        tools: [
            "Z-Brush",
            "Houdini",
            "Unreal Engine",
        ],
        tags: [
            "3D",
            "game",
            "asset",
            "real time"
        ]
    },
    {
        type: "3D",
        id: "snow15",
        title: "Snow",
        year: 2015,
        client: "Private",
        description: "Environent Design",
        images: [
            "38d4bb60-6f5c-472e-8216-46c369a1908d",

        ],
        tools: [
            "Cinema 4D",
        ],
        tags: [
            "3D",
            "Environment"
        ]
    },
    {
        type: "3D",
        id: "seaduck15",
        title: "Sea Duck",
        year: 2015,
        client: "Private",
        description: "This model of the Sea Duck from the 90's cartoon Tailspin was commissioned by a fan. The plane was modeled, textured and rendered with a cel shader in Cinema 4D",
        images: [
            "3567a81a-83a7-4b00-a965-087f827e71df",
            "19c2c744-f541-49d7-90cf-67cd306f0dfb",
            "27dc3fc3-fbc5-4ff3-8e03-a323cd923389",
            "967cfe7c-c561-4410-94b8-3a630cc087e5"
        ],
        tools: [
            "Cinema 4D",
        ],
        tags: [
            "3D",
            "hard surface",
            "vehicle"
        ]
    },
    
    {
        type: "video",
        id: "eris20",
        title: "Eris Silver Library",
        year: 2021,
        client: "Eris Silver",
        description: "",
        images: [
            "https://ucarecdn.com/21741251-6b99-49ad-857e-96a76a19c835/"
        ],
        media: [
            {
                host: "vimeo",
                url: "https://vimeo.com/668826605",
                embed: `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/668826605?h=526cc4f514&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Eris Silver Library 1"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`
            }
        ]
    }
    */
]

