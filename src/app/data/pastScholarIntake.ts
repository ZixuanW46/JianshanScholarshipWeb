export type ScholarSessionSlot = "A" | "B";
export type ScholarDegreeLevel = "undergrad" | "master" | "phd";

export interface ScholarSessionIdea {
    slot: ScholarSessionSlot;
    titleZh: string;
    titleEn: string;
}

export interface PastScholarIntakeRecord {
    source: "schedule-sheet-1" | "schedule-sheet-2" | "schedule-sheet-2024";
    order: number;
    teacherGivenName: string;
    sessionIdeas: ScholarSessionIdea[];
}

export interface PastScholarResolvedMetadata {
    displayName?: string;
    matchedFullName?: string;
    nationality?: string;
    college?: string;
    subject?: string;
    degreeLevel?: ScholarDegreeLevel;
    participationYear: "2024" | "2025";
    notes?: string;
}

export const PAST_SCHOLAR_INTAKE: PastScholarIntakeRecord[] = [
    {
        source: "schedule-sheet-1",
        order: 1,
        teacherGivenName: "Mara",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "用几种颜色就能解数学题?",
                titleEn: "Does Maths Have Anything To Do With Colours?",
            },
            {
                slot: "B",
                titleZh: "对话爱因斯坦：时间真的恒定不变吗?",
                titleEn: "How Can Einstein Possibly Be Right? - Doesn't Time Always Stay the Same?",
            },
        ],
    },
    {
        source: "schedule-sheet-1",
        order: 2,
        teacherGivenName: "Shifat",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "宇宙观重塑：我们真的活在龟背上吗?",
                titleEn: "Models of The Universe: Is It Turtles All The Way Down?",
            },
            {
                slot: "B",
                titleZh: "文明VIII：重蹈覆辙还是开辟新路",
                titleEn: "Rebuilding Civilisation: Stuck On Old Earth",
            },
        ],
    },
    {
        source: "schedule-sheet-1",
        order: 3,
        teacherGivenName: "Tatiana",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "莲花效应：入云深处“不”沾衣",
                titleEn: "The Magic of Invisible Coatings: How Materials Defy Elements Like Water",
            },
            {
                slot: "B",
                titleZh: "变废为宝：果冻也能点亮未来?",
                titleEn: "Gel That Lights the Future",
            },
        ],
    },
    {
        source: "schedule-sheet-1",
        order: 4,
        teacherGivenName: "Carmen",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "我们可以预防自然灾害吗?",
                titleEn: "Disaster Detectives: Predicting and Preventing Natural Hazards",
            },
            {
                slot: "B",
                titleZh: "化石里竟藏着开启绿色未来的钥匙?",
                titleEn: "Reading the Rocks: Finding the Metals for a Green Future",
            },
        ],
    },
    {
        source: "schedule-sheet-1",
        order: 5,
        teacherGivenName: "Jevon",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "用逻辑门搭建数字世界",
                titleEn: "Building Digital Circuits with EBNF and Logic Gates",
            },
            {
                slot: "B",
                titleZh: "悬臂大挑战：如何又省又稳?",
                titleEn: "Cantilever Challenge - Build the Most Cost-Efficient Structure",
            },
        ],
    },
    {
        source: "schedule-sheet-1",
        order: 6,
        teacherGivenName: "Amy",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "乐高积木的宇宙，从脑洞到现实",
                titleEn: "Manufacturing: How are Products Made?",
            },
            {
                slot: "B",
                titleZh: "抄大自然的作业：科技背后的生物灵感",
                titleEn: "Biomimetic Design: How is Nature Inspiring Technology?",
            },
        ],
    },
    {
        source: "schedule-sheet-1",
        order: 7,
        teacherGivenName: "Sultan",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "解密“游戏脑”：电子游戏如何改变你",
                titleEn: "Your Brain on Games: How Video Games Shape Your Mind",
            },
            {
                slot: "B",
                titleZh: "决策科学：你的选择，真的是你的吗?",
                titleEn: "The Science of Decision-Making: Are We Really in Control",
            },
        ],
    },
    {
        source: "schedule-sheet-1",
        order: 8,
        teacherGivenName: "Duncan",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "证据拼图：真实世界的线索博弈",
                titleEn: "Packaging Stories: Communicating Evidence in the Real World",
            },
            {
                slot: "B",
                titleZh: "分蛋糕的学问：公平的数学与艺术?",
                titleEn: "The Art of Decision-Making: How Should We Cut the Cake?",
            },
        ],
    },
    {
        source: "schedule-sheet-1",
        order: 9,
        teacherGivenName: "Nicholas",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "零花钱这么越来越少：钱去哪儿了?",
                titleEn: "Economics: Shrinking Pocket Money - where has it gone?",
            },
            {
                slot: "B",
                titleZh: "经济政策：要蓝天还是要面包",
                titleEn: "Law: Why the Environment is Salient",
            },
        ],
    },
    {
        source: "schedule-sheet-1",
        order: 10,
        teacherGivenName: "Ryan",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "谈判兵法：商业博弈的艺术与技巧",
                titleEn: "Commercial Negotiation - The Art of the Deal",
            },
            {
                slot: "B",
                titleZh: "模拟庭审：罪与罚",
                titleEn: "The Trial - Criminal Law",
            },
        ],
    },
    {
        source: "schedule-sheet-1",
        order: 11,
        teacherGivenName: "Zainab",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "僵尸来袭! 你将如何统治末日世界?",
                titleEn: "How Would You Govern a Zombie Apocalypse?",
            },
            {
                slot: "B",
                titleZh: "嘘! 听怪物讲故事：文化如何“驯服”恐惧?",
                titleEn: "Masks, Myths, and Monsters: How Cultures Symbolise Fear in the Face of Danger?",
            },
        ],
    },
    {
        source: "schedule-sheet-1",
        order: 12,
        teacherGivenName: "Jonathan",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "福尔摩斯第一课：犯罪现场如何鉴别信息源?",
                titleEn: "Becoming Sherlock 1: What can crime scenes tell us about how we use sources?",
            },
            {
                slot: "B",
                titleZh: "福尔摩斯第二课：法庭上的“证据链”",
                titleEn: "Becoming Sherlock 2: The Courtroom",
            },
        ],
    },
    {
        source: "schedule-sheet-1",
        order: 13,
        teacherGivenName: "Ceiara",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "眼见一定为实吗：解密视觉错觉",
                titleEn: "Is Your Brain Lying to You? The Psychology of Visual Illusions",
            },
            {
                slot: "B",
                titleZh: "注意注意! 你的“专注”跑哪儿去了?",
                titleEn: "Attention, Please! The Science of Attention and Distraction",
            },
        ],
    },
    {
        source: "schedule-sheet-2",
        order: 1,
        teacherGivenName: "Valentina",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "性别密码：染色体中的隐藏剧情",
                titleEn: "Why XX And XY Don't Tell The Whole Story",
            },
            {
                slot: "B",
                titleZh: "痛觉警报：当生理期成为身体密探",
                titleEn: "Why Period Pain Isn't Always Just Period Pain",
            },
        ],
    },
    {
        source: "schedule-sheet-2",
        order: 2,
        teacherGivenName: "Affan",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "你的第一次编程，但这次是写“游戏”",
                titleEn: "Introduction to Software Development - Making Games",
            },
            {
                slot: "B",
                titleZh: "破译计算机的“秘密通信”",
                titleEn: "How Do Computers Represent Numbers And Text?",
            },
        ],
    },
    {
        source: "schedule-sheet-2",
        order: 3,
        teacherGivenName: "Ismail",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "美丽新世界：我的意识还属于我吗",
                titleEn: "Can You Control Your Own Brain?",
            },
            {
                slot: "B",
                titleZh: "解梦空间：你的大脑自我放飞了吗",
                titleEn: "Dreams: Your Brain's Playground or Chaos?",
            },
        ],
    },
    {
        source: "schedule-sheet-2",
        order: 4,
        teacherGivenName: "Qi Shean",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "通过“逛街”给手机充电?",
                titleEn: "Piezoelectric: Why Can't My Shoes Charge My Phone?",
            },
            {
                slot: "B",
                titleZh: "3D打印狂想曲：从盖房子到造人心!",
                titleEn: "3D Printing: From Houses to Human Hearts!",
            },
        ],
    },
    {
        source: "schedule-sheet-2",
        order: 5,
        teacherGivenName: "Qinglan",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "一日“皇帝”假想：你会如何立法",
                titleEn: "If You Could Introduce Any Law, What Would It Be?",
            },
            {
                slot: "B",
                titleZh: "别信“法眼”：揭开法律的“偏心”面纱",
                titleEn: "Is the Law Always Fair?",
            },
        ],
    },
    {
        source: "schedule-sheet-2",
        order: 6,
        teacherGivenName: "Johann",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "策略至上：用博弈论玩转股市算法",
                titleEn: "Game Theory and Algorithmic Trading",
            },
            {
                slot: "B",
                titleZh: "货币魔法：从豆子到银行，谁在操控价格?",
                titleEn: "Inflation and Interest Rates",
            },
        ],
    },
    {
        source: "schedule-sheet-2",
        order: 7,
        teacherGivenName: "Anna",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "失去语言，你还能思考吗?",
                titleEn: "Can You Think Without Language?",
            },
            {
                slot: "B",
                titleZh: "没有哆啦A梦，你也可以有“记忆面包”",
                titleEn: "Why Do We Remember Some Things and Forget Others?",
            },
        ],
    },
    {
        source: "schedule-sheet-2",
        order: 8,
        teacherGivenName: "Advait",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "癌细胞自己知道要去哪么?",
                titleEn: "How Do Cancer Cells Decide Where To Go?",
            },
            {
                slot: "B",
                titleZh: "抗癌“心”事：当救命药遇上“玻璃心”",
                titleEn: "When Curing Cancer Breaks the Heart: An Introduction to Cardio-Oncology",
            },
        ],
    },
    {
        source: "schedule-sheet-2",
        order: 9,
        teacherGivenName: "Nahyean",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "宁要浦西一张床，不要浦东一间房? 应该吗?",
                titleEn: "Would You Rather Own a Toilet in London or a Castle in Scotland?",
            },
            {
                slot: "B",
                titleZh: "禁止跳舞的城市：规章背后的秘密玩法",
                titleEn: "Why Did This Town Ban Dancing? - Exploring Urban Regulation Through Weird Planning Laws",
            },
        ],
    },
    {
        source: "schedule-sheet-2",
        order: 10,
        teacherGivenName: "Abigail",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "小物件，大历史：从日常物品读懂世界",
                titleEn: "History in Your Hands: How Everyday Objects Can Change the World",
            },
            {
                slot: "B",
                titleZh: "历史大骗局：谁在“编”我们的过去?",
                titleEn: "Lies and Lost Truths: The Historical Myths We Believe and Why They Matter",
            },
        ],
    },
    {
        source: "schedule-sheet-2",
        order: 11,
        teacherGivenName: "Yolanda",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "西方人眼中的“东方主义”是什么?",
                titleEn: "What is Orientalism?",
            },
            {
                slot: "B",
                titleZh: "性别、文化与权力：从泰国荧幕看懂社会",
                titleEn: "Gender, Culture and Power: Understanding Rape Culture in Thailand (and Beyond)",
            },
        ],
    },
    {
        source: "schedule-sheet-2",
        order: 12,
        teacherGivenName: "Hertha",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "急诊大作战：模拟一场医疗系统的连锁崩溃",
                titleEn: "The Domino Effect of Healthcare",
            },
            {
                slot: "B",
                titleZh: "公众号说咖啡致癌? 医学统计的谣言拆解术",
                titleEn: "Fact of Fiction? Misinformation in Health Data",
            },
        ],
    },
    {
        source: "schedule-sheet-2",
        order: 13,
        teacherGivenName: "Mikhail",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "聚光灯下的心跳：舞台人格的“出厂设置”",
                titleEn: "Smile! People Are Watching! - The Psychology of Performance and Presence",
            },
            {
                slot: "B",
                titleZh: "当AI开始作曲：艺术已死? 艺术永生?",
                titleEn: "The True Renaissance: AI and Art",
            },
        ],
    },
    {
        source: "schedule-sheet-2",
        order: 14,
        teacherGivenName: "Esther",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "当外星人降临，我们如何沟通?",
                titleEn: "Cracking the Code: Patterns in Language",
            },
            {
                slot: "B",
                titleZh: "“热”和“狗”凑一起，怎么就成了美味?",
                titleEn: "Who's in Charge? Finding the Head of Words and Exploring Ambiguity",
            },
        ],
    },
];

export const PAST_SCHOLAR_INTAKE_2024: PastScholarIntakeRecord[] = [
    {
        source: "schedule-sheet-2024",
        order: 1,
        teacherGivenName: "Liam",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "",
                titleEn: "Introduction to Biological Anthropology",
            },
            {
                slot: "B",
                titleZh: "",
                titleEn: "\"Red in tooth and claw?\" The Evolution of Cooperation & Kindness",
            },
        ],
    },
    {
        source: "schedule-sheet-2024",
        order: 2,
        teacherGivenName: "Asa",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "",
                titleEn: "Memory and Neural Science",
            },
            {
                slot: "B",
                titleZh: "",
                titleEn: "What are mitochondria and how did our cells get them?",
            },
        ],
    },
    {
        source: "schedule-sheet-2024",
        order: 3,
        teacherGivenName: "Martina",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "",
                titleEn: "Hands-on Statistics",
            },
            {
                slot: "B",
                titleZh: "",
                titleEn: "Topology: an Odyssey in the space (Math topic)",
            },
        ],
    },
    {
        source: "schedule-sheet-2024",
        order: 4,
        teacherGivenName: "Kate",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "",
                titleEn: "Robotics",
            },
            {
                slot: "B",
                titleZh: "",
                titleEn: "Product Design",
            },
        ],
    },
    {
        source: "schedule-sheet-2024",
        order: 5,
        teacherGivenName: "Harry",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "",
                titleEn: "3D Printing",
            },
            {
                slot: "B",
                titleZh: "",
                titleEn: "Artificial Intelligence (AI)",
            },
        ],
    },
    {
        source: "schedule-sheet-2024",
        order: 6,
        teacherGivenName: "Shivraj",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "",
                titleEn: "Introduction to Criminal Law",
            },
            {
                slot: "B",
                titleZh: "",
                titleEn: "Introduction to Tort Law",
            },
        ],
    },
    {
        source: "schedule-sheet-2024",
        order: 7,
        teacherGivenName: "Diana",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "",
                titleEn: "The variety of psychology",
            },
            {
                slot: "B",
                titleZh: "",
                titleEn: "Reading your mind?: An intro to Clinical Psychology",
            },
        ],
    },
    {
        source: "schedule-sheet-2024",
        order: 8,
        teacherGivenName: "Stephanie",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "",
                titleEn: "Theory of History + An Intro to Historiography",
            },
            {
                slot: "B",
                titleZh: "",
                titleEn: "Source Analysis - Investigating the lives of children in early modern England",
            },
        ],
    },
    {
        source: "schedule-sheet-2024",
        order: 9,
        teacherGivenName: "Lily",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "",
                titleEn: "Can elephants (and other animals) help us cure human cancer?",
            },
            {
                slot: "B",
                titleZh: "",
                titleEn: "Can we predict the next pandemic?",
            },
        ],
    },
    {
        source: "schedule-sheet-2024",
        order: 10,
        teacherGivenName: "Vittoria",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "",
                titleEn: "Classical Art and Vase Painting",
            },
            {
                slot: "B",
                titleZh: "",
                titleEn: "Greek and Latin literature",
            },
        ],
    },
    {
        source: "schedule-sheet-2024",
        order: 11,
        teacherGivenName: "Federico",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "",
                titleEn: "Ancient Rome",
            },
            {
                slot: "B",
                titleZh: "",
                titleEn: "Automation",
            },
        ],
    },
    {
        source: "schedule-sheet-2024",
        order: 12,
        teacherGivenName: "Szymon",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "",
                titleEn: "Why is riding a monocycle possible?",
            },
            {
                slot: "B",
                titleZh: "",
                titleEn: "Why does a sandwich always land butter down?",
            },
        ],
    },
    {
        source: "schedule-sheet-2024",
        order: 13,
        teacherGivenName: "Chloe",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "",
                titleEn: "Political Science",
            },
            {
                slot: "B",
                titleZh: "",
                titleEn: "Economic Development Studies",
            },
        ],
    },
    {
        source: "schedule-sheet-2024",
        order: 14,
        teacherGivenName: "Lucia",
        sessionIdeas: [
            {
                slot: "A",
                titleZh: "",
                titleEn: "Different Approaches to Psychology",
            },
            {
                slot: "B",
                titleZh: "",
                titleEn: "Experimental Psychology",
            },
        ],
    },
];

export const PAST_SCHOLAR_RESOLVED_METADATA: Record<string, PastScholarResolvedMetadata> = {
    Liam: {
        matchedFullName: "Liam McClain",
        nationality: "American",
        college: "Downing College",
        subject: "Archaeology",
        degreeLevel: "undergrad",
        participationYear: "2024",
        notes: "Screenshot marks 'Undergrad?' as Yes, but course is listed as MSc and year as Postgrad.",
    },
    Asa: {
        matchedFullName: "Asa Fletcher-Snow",
        college: "Fitzwilliam College",
        nationality: "British",
        subject: "Biology",
        degreeLevel: "undergrad",
        participationYear: "2024",
    },
    Martina: {
        matchedFullName: "Martina Scauda",
        nationality: "Italian",
        college: "Newnham College",
        subject: "Mathematics",
        degreeLevel: "phd",
        participationYear: "2024",
    },
    Kate: {
        matchedFullName: "Kate Lucas",
        nationality: "British",
        college: "Homerton College",
        subject: "Manufacturing Engineering",
        degreeLevel: "undergrad",
        participationYear: "2024",
    },
    Harry: {
        matchedFullName: "Harry Carson",
        nationality: "British",
        college: "St Catharine's College",
        subject: "Manufacturing Engineering",
        degreeLevel: "undergrad",
        participationYear: "2024",
        notes: "Screenshot marks year as Postgrad but also marks 'Undergrad?' as Yes.",
    },
    Diana: {
        matchedFullName: "Diana Alguacil",
        nationality: "Spanish",
        college: "Girton College",
        subject: "Gender Studies",
        degreeLevel: "master",
        participationYear: "2024",
    },
    Stephanie: {
        matchedFullName: "Stephanie Belz",
        nationality: "German / Romanian",
        college: "Girton College",
        subject: "History",
        degreeLevel: "undergrad",
        participationYear: "2024",
    },
    Lily: {
        matchedFullName: "Lily Fisher",
        nationality: "British",
        college: "St John's College",
        subject: "Medicine",
        degreeLevel: "undergrad",
        participationYear: "2024",
    },
    Vittoria: {
        matchedFullName: "Vittoria Vegni",
        nationality: "Italian",
        college: "Queens' College",
        subject: "Classics",
        degreeLevel: "undergrad",
        participationYear: "2024",
    },
    Federico: {
        matchedFullName: "Federico Baroni",
        nationality: "Italian",
        college: "Selwyn College",
        subject: "Manufacturing Engineering",
        degreeLevel: "undergrad",
        participationYear: "2024",
    },
    Szymon: {
        matchedFullName: "Szymon Piatek",
        nationality: "Polish",
        college: "Peterhouse College",
        subject: "Engineering",
        degreeLevel: "undergrad",
        participationYear: "2024",
        notes: "Screenshot marks year as Postgrad but also marks 'Undergrad?' as Yes.",
    },
    Chloe: {
        matchedFullName: "Chloe Staller",
        nationality: "France",
        college: "Girton College",
        subject: "Development Studies",
        degreeLevel: "master",
        participationYear: "2024",
        notes: "Screenshot marks 'Undergrad?' as Yes, but course is listed as MPhil and year as Postgrad.",
    },
    Shivraj: {
        matchedFullName: "Shivraj Das",
        nationality: "British",
        college: "Peterhouse",
        subject: "Law",
        degreeLevel: "undergrad",
        participationYear: "2024",
    },
    Lucia: {
        matchedFullName: "Lucia Goulev",
        nationality: "British",
        college: "Gonville and Caius College",
        subject: "Psychology",
        degreeLevel: "undergrad",
        participationYear: "2024",
    },
    Mara: {
        matchedFullName: "Mara Zaharia",
        nationality: "Romanian",
        college: "Trinity College",
        subject: "Mathematics",
        degreeLevel: "undergrad",
        participationYear: "2025",
    },
    Shifat: {
        matchedFullName: "Shifat Matbbar",
        nationality: "British",
        college: "Corpus Christi College",
        subject: "Physics",
        degreeLevel: "undergrad",
        participationYear: "2025",
    },
    Tatiana: {
        matchedFullName: "Tatiana Gagalowicz",
        nationality: "French",
        college: "Downing College",
        subject: "Chemistry",
        degreeLevel: "master",
        participationYear: "2025",
    },
    Carmen: {
        matchedFullName: "Carmen Barroso Carmona",
        nationality: "Spanish",
        college: "Homerton College",
        subject: "Earth Sciences",
        degreeLevel: "undergrad",
        participationYear: "2025",
    },
    Jevon: {
        matchedFullName: "Jevon Sunandar",
        nationality: "Indonesian",
        college: "Lucy Cavendish College",
        subject: "Information Engineering",
        degreeLevel: "undergrad",
        participationYear: "2025",
    },
    Amy: {
        matchedFullName: "Amy Naden",
        nationality: "British",
        college: "Jesus College",
        subject: "Manufacturing Engineering",
        degreeLevel: "undergrad",
        participationYear: "2025",
    },
    Sultan: {
        matchedFullName: "Sultan Aslam",
        nationality: "British",
        college: "Clare College",
        subject: "Medicine",
        degreeLevel: "undergrad",
        participationYear: "2025",
    },
    Duncan: {
        matchedFullName: "Duncan Cook",
        nationality: "British",
        college: "King's College",
        subject: "Statistics and Public Policy",
        degreeLevel: "undergrad",
        participationYear: "2025",
    },
    Nicholas: {
        matchedFullName: "Nicholas Min",
        nationality: "Malaysian",
        college: "Hughes Hall",
        subject: "Land Economy",
        degreeLevel: "undergrad",
        participationYear: "2025",
    },
    Ryan: {
        matchedFullName: "Ryan Hogan",
        nationality: "British",
        college: "Pembroke College",
        subject: "Law",
        degreeLevel: "undergrad",
        participationYear: "2025",
    },
    Zainab: {
        matchedFullName: "Zainab Miah",
        nationality: "British",
        subject: "HSPS",
        degreeLevel: "undergrad",
        participationYear: "2025",
    },
    Jonathan: {
        matchedFullName: "Jonathan Corner",
        nationality: "British",
        college: "Gonville and Caius College",
        subject: "History",
        degreeLevel: "undergrad",
        participationYear: "2025",
    },
    Ceiara: {
        matchedFullName: "Ceiara Caparas",
        nationality: "British",
        college: "Girton College",
        subject: "Psychology",
        degreeLevel: "undergrad",
        participationYear: "2025",
    },
    Valentina: {
        matchedFullName: "Valentina Lorenzi",
        nationality: "Italian",
        college: "Queens' College",
        subject: "Biology",
        degreeLevel: "phd",
        participationYear: "2025",
    },
    Affan: {
        matchedFullName: "Affan Siddiqui",
        nationality: "British",
        college: "Trinity Hall",
        subject: "Computer Science",
        degreeLevel: "undergrad",
        participationYear: "2025",
    },
    Ismail: {
        matchedFullName: "Ismail Ahmed",
        nationality: "British",
        college: "Trinity College",
        subject: "Medicine",
        degreeLevel: "undergrad",
        participationYear: "2025",
    },
    "Qi Shean": {
        matchedFullName: "Qi Shean Lim",
        nationality: "Malaysian",
        college: "Newnham College",
        subject: "Engineering",
        degreeLevel: "undergrad",
        participationYear: "2025",
    },
    Qinglan: {
        matchedFullName: "Qinglan Du",
        nationality: "Chinese",
        college: "Christ's College",
        subject: "Law",
        degreeLevel: "undergrad",
        participationYear: "2025",
    },
    Johann: {
        matchedFullName: "Johann Power",
        nationality: "British, French",
        college: "St Edmund's College",
        subject: "Economics and Data Science",
        degreeLevel: "master",
        participationYear: "2025",
    },
    Anna: {
        matchedFullName: "Anna Bevan",
        nationality: "British",
        college: "Homerton College",
        subject: "Education",
        degreeLevel: "undergrad",
        participationYear: "2025",
    },
    Advait: {
        matchedFullName: "Advait Raja",
        nationality: "British",
        subject: "Medicine",
        degreeLevel: "undergrad",
        participationYear: "2025",
    },
    Nahyean: {
        matchedFullName: "Nahyean Ahmed",
        nationality: "British",
        college: "Downing College",
        subject: "Land Economy",
        degreeLevel: "undergrad",
        participationYear: "2025",
    },
    Abigail: {
        matchedFullName: "Abigail Soskind",
        nationality: "British, American",
        college: "Girton College",
        subject: "History",
        degreeLevel: "undergrad",
        participationYear: "2025",
    },
    Yolanda: {
        matchedFullName: "Yolanda Ledesma",
        nationality: "Spanish",
        college: "Trinity Hall",
        subject: "Asian and Middle Eastern Studies",
        degreeLevel: "undergrad",
        participationYear: "2025",
    },
    Hertha: {
        matchedFullName: "Hertha Gallego",
        nationality: "Spanish",
        college: "Newnham College",
        subject: "Population Health Sciences",
        degreeLevel: "master",
        participationYear: "2025",
    },
    Mikhail: {
        matchedFullName: "Mikhail Petrovic",
        nationality: "British",
        college: "Clare College",
        subject: "Music",
        degreeLevel: "undergrad",
        participationYear: "2025",
    },
    Esther: {
        displayName: "Esther Ng",
        matchedFullName: "Esther Ng",
        nationality: "Malaysian",
        college: "Magdalene College",
        subject: "Linguistics",
        degreeLevel: "undergrad",
        participationYear: "2025",
        notes: "Application form record was filed as 'Ng Yu Xuan'.",
    },
};
