var speed = 50;
const box = document.getElementById("rpgtext");
const imgIdle = document.getElementById("rpgimgidle");
const imgTalk = document.getElementById("rpgimgtalk");
let typingId = 0;

const quote = [
            "Dimly lit, the room emits a hollow, muffled sound. It houses a single sorry soul, no other to be found",
            "Water-damaged off-white ceilings, crumbling crown molding, faded paint and threadbare linens and there's no place I'd rather sleep",
            "These four walls extend beyond my sight and breathe new life into me",
            "I’ve found my home inside these walls, the world is my own. I write the rules alone in here. I sit atop a throne",
            "I get this feeling that I’m not the first and not the last to find solace in this empty room",
            "These decaying walls were all that kept me sane",
            "不幸な girl, 不幸な girl;        If you wanna flay me let's see what's inside",
            "The screams of a tiny girl are of no concern to the whole wide world, no matter how loud",
            "well, this decease is defined by its treatment; you people make me sick!",
            "I wanna contribute to the chaos, I don't wanna watch and then complain",
            "In my little space     nothing changes.        I don't like this place.        I wanna escape this",
    "not a sibgle star graces our sky tonight.",
    "Make sure you kiss your knuckles before you punch me in the face!"
        ];
const talk = [
            "Being mentally ill is like being on hard drugs, but with no fun.",
            "Hell is other people.",
            "i gave up on trying to be okay and now im doing many drugs",
            "guys i'm so sorry i was toxic that won't happen again [turns into a biblically accurate angel]",
            "my hate club is so small that i am the one who has to do the all hating",
            "what doesn't kill me should try harder",
            "i have 0 knowledge",
            "gay bloodcells be carrying homoglobin",
            "tasty megabites...",
            "if there's adverb and verb, there should be adjective and jective",
    "stereo sound makes my head hurt..."
        ];
const about = [
    "hi! i'm this site's mascot.",
    "My name is Fuko Una!",
    "Fuko 2.0!",
    "beep boop, i'm  a robot",
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
    "ppl in stone age going to sleep be like: ah yes, bed rock"
        ];

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function speech(a) {
    typingId++;
    const randomIndex = Math.floor(Math.random() * a.length);
    txt = a[randomIndex];
    box.innerHTML = "* ";

    typeWriter(typingId);

    await sleep(speed * txt.length * 1.2);
    imgIdle.style.display = "block";
    imgTalk.style.display = "none";
}

async function typeWriter(myId) {
    for (let i = 0; i < txt.length; i++) {
        imgIdle.style.display = "none";
        imgTalk.style.display = "block";
        if (myId !== typingId) return;
        console.log(i);
        box.innerHTML += txt.charAt(i);
        await sleep(speed);
    }
}
