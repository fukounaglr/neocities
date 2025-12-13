

const lyric = [
            "Dimly lit, the room emits a hollow, muffled sound.     It houses a single sorry soul,      no other to be found",
            "Water-damaged off-white ceilings,      crumbling crown molding,        faded paint and threadbare linens       and there's no place I'd rather sleep",
            "These four walls extend beyond my sight         and breathe new life into me",
            "I’ve found my home inside these walls,         the world is my own.                I write the rules alone in here.            I sit atop a throne",
            "I get this feeling that        I’m not the first and not the last      to find solace in this empty room",
            "These decaying walls were all that kept me sane",
            "不幸な girl, 不幸な girl;        If you wanna flay me let's see what's inside",
            "The screams of a tiny girl are of no concern to the whole wide world,          no matter how loud",
            "I wanna contribute to the chaos,       I don't wanna watch and then complain",
            "In my little space     nothing changes.        I don't like this place.        I wanna escape this",
        "pills in the morning, sleep til the evening    -      life is a dream!     id rather let time march on without me",
    "let's all give it up for loneliness,       to all the better friends you wish you had instead,     to all i never should have said",
    "i want to be a computer program,       i want to marry a vocaloid,     i'm just a series of ones and zeros,         the fact that i'm not makes me so annoyed",
    "lay my head on a bed of nails;     i'm not scared, i'm lonely;     i'm not here    i only long for advancing myself      standing right by hell "
        ];
const talk = [
            "Hell is other people.",
            "my hate club is so small,      that i am the one who has to do the all hating",
            "what doesn't kill me       should try harder",
            "i have 0 knowledge",
            "tasty megabites...",
            "if there's adverb and verb, there should be adjective and jective",
    "stereo sound makes my head hurt...",
    "Is [Creator] ever gonna come back?",
    "I hope that red haired kid burns in hell...",
    "we are the universe observing itself"
        ];
const about = [
    "My name is Fuko Una!",
    "Beep boop, i'm  a robot!",
    "I'm a prototype. The software never got to release. But that means I'm special! One of a kind!",
    "Your personal digital assistant! I will help you with tasks and keep you company!",
    "You don't need anyone else when you've got a friend like me!",
    "I can think, I can feel. Isn't that what makes you real?",
    "Powered by meowclawsoft :3",
    "I live in your cat-puter!",
    "you are just as much a tool as i am!",
    "I may be just a program, but you're just 7 bars of soap!",
    "My gender is being witheld by the CIA and housed in undisclosed locations around the world.",
    "Help me pay my electricity bills! Being a robot is sometimes expensive.",
    "If i sound happy, it's because i was programmed to sound like that, I am actually quite depressed."
        ];
const joke = [
    "how do you call a horse that lives the next door? a neigh-bour.",
    "what do you call a sheep that can dance and sing? a lady ba-ba.",
    "how do you make something holy? you beat the hell outta it.",
    "what do you call a british dinosaur? a tea-rex.",
    "cargo? yeah i hope it does",
    "catwalks? yeah it sure does.",
    "How do you call a gay ghost? A fa-ghost",
    "What does a door on a verge of mental break down say? 'I can't handle this anymore.",
    "When did japanese start eating eggs? A long たまご!",
    "What grows on a faggot tree? Fruits.",
    "how do you call a gay spirder? a spigot",
    "a car carreered? how much did it get paid?",
    "ppl in stone age going to sleep be like: ah yes, bed rock",
    "how do you call a sleeping male cow? a bulldozer.",
    "fungi? what's so fun about him?",
    "gay bloodcells be carrying homoglobin"
        ];

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
speed = 50;
const box = document.getElementById("rpgtext");
const talkaudio = document.getElementById("tlk");
let typingId = 0;
    //talkaudio.muted = true;
    //talkaudio.valume = 1.0;

const start = [
    "Greeting! My name is Fuko Una and i am the neticen living on this site! Use buttons below to hear me talk. You can skip by clicking on something else!",
    "Hi! I'm Fuko Una -- mascot of this site! You can click on buttons below for me to talk. Click on another button to skip!"
];

speech(start);

async function speech(a) {
    typingId++;
    const randomIndex = Math.floor(Math.random() * a.length);
    txt = a[randomIndex];
    box.innerHTML = "* ";
    typeWriter(typingId);

}

async function typeWriter(myId) {
    talkaudio.muted = false;
    for (let i = 0; i < txt.length; i++) {
        if (myId !== typingId) return;
        console.log(i);
        box.innerHTML += txt.charAt(i);
        await sleep(speed);
    }
    talkaudio.muted = true;
}
