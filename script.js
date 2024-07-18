


const calendar = document.getElementById('calendar');
const monthYear = document.getElementById('monthYear');
const prevMonth = document.getElementById('prevMonth');
const nextMonth = document.getElementById('nextMonth');
const modal = document.getElementById('noteModal');
const noteText = document.getElementById('noteText');
const closeModal = document.getElementsByClassName('close')[0];





let currentDate = new Date(2023, 6, 1); // July 2023
const endDate = new Date(2024, 6, 31); // July 2024




const notes = {
    // Add your notes here, format: 'YYYY-MM-DD': 'Your cute note'
    '2023-07-18': 'Our story begins!!!💖',
    '2023-07-20': 'I heard you sing "Nira" for the first time. was it heavenly or was it heavenly?',
    '2023-07-23': 'I found the courage to sing yellow to you☀️',
    '2023-07-24': 'You told me about your goals for the first time. I fell in love with the way your mind works💕',
    '2023-07-25': 'LoSt pAnDa🐼. Your reaction made me realise how much it meant to you. It felt good.',
    '2023-07-28': 'Loved filling your book with pickup lines ;)',
    '2023-08-01': 'National Girlfriends Day. You bought a chocolate for me and i said everthing i could to get you to say those words.',
    '2023-08-02': 'Gave me the chocolate. A huge Dairy milk Silk.',
    '2023-08-06': 'Our first date!!🐕',
    '2023-08-10': 'You gave me a nose hickey for the first time XD',
    '2023-08-14': 'I introduced you to cheeku🐈',
    '2023-08-16': 'My 20th! Someone wrote a poem for me for the first time.',
    '2023-08-18': 'A month already?!',
    '2023-08-19': 'We spoke for 2 hours on call for the first time.',
    '2023-08-23': 'Ladies, get yourself a man who sends you beautiful pictures of the moon. On this day, you sent one for the first time. It looked beautiful🌙',
    '2023-08-26': 'We intentionally got drenched. I ran down a sloped road in the rain, holding hands and laughing, with my favourite person ever.',
    '2023-08-28': 'You took the panda with you to hyd💘',
    '2023-09-04': 'The first time i cried in front of you because thatha had passed away. I didnt wanna leave your arms.',
    '2023-09-05': 'The EVER-FAMOUS smrithi dosa was made👩‍🍳',
    '2023-09-08': 'You introduced me to pablo🐕‍🦺',
    '2023-09-09': 'Angry birds movie night!!!',
    '2023-09-11': "I got my first ever gift from you - The Petromax. That one's special💓",
    '2023-09-13': "You secretly put a schmitten in my bag, knowing i'd crave for a sweet",
    '2023-09-16': "Decathlon walkathon. You asked me to come sit next to you in public for the first time.",
    '2023-09-20': "You got the AI Lead position!!!🥳🥳🥳🥳🥳",
    '2023-09-24': "Your 20th!! You gave me a virtual hug for the first time after my PPT presentation.",
    '2023-09-26': "Encanto movie night!!!",
    '2023-10-03': "Happy Bowfriends Day :) We made two retriever friends💞",
    '2023-10-06': "You finally got the tarzen whistle!🦍",
    '2023-10-07': "We unintentionally perfectly twinned with black outfits on our date🖤",
    '2023-10-10': "I sent you a picture of my pimple and you responded with 'umma beka?🫠🫠🫠",
    '2023-10-16': "Your first GDSC sesh as an AI Lead!!",
    '2023-10-19': "You saw me in two braids for the first time",
    '2023-10-21' : "You made a CSS hover effect on the text 'ILOVEYOURDIMPLES'😽",
    '2023-10-22' : "You said 'i wanna kiss you' and kissed me. There we have it - OUR FIRST KISS!!!!",
    '2023-10-23' : "You introduced me to Andrew Ng.",
    '2023-10-26' : "You sent me the poem again because i lost the sheet of paper. I needed that. I felt horrible",
    '2023-10-29' : "We both got the perfect eclipse shots of the moon!",
    '2023-10-31' : "You started a new book - 'START WITH WHY'.",
    '2023-11-01' : "You sent your first shirtless picture🥰wearing a panche, which was a bonus first.",
    '2023-11-02' : "I had a scary encounter with sudheer, and you sent me pictures of you to make me forget it.", 
    '2023-11-04' : "Lied down on the grass on a breezy evening, staring at the sky, with you beside me, at cubbon. It was straight out of a movie.",
    '2023-11-07' : "I got the previlege of choosing your google acc dp :D",
    '2023-11-11' : "You said you love the way i smell for the first time",
    '2023-11-13' : "Happy diwaliii! I draped a saree for the first time to impress you!!",
    '2023-11-15' : "You approached a company CTO and had a one and a half hour bonding sesh. I felt so proud😙",
    '2023-11-16' : "PANDART🤌🤌",
    '2023-11-20' : "Spoke about first crushes. (It\'s hard to act like you don't care when you're hella jealous. Would not recommend this conversation.)",
    '2023-11-21' : "I saw you in your black sleeveless hoodie for the first time and oh boy i fell in love once again.",
    '2023-11-23' : "You gave me another gift - a rose in a tiny bottle. IT WAS BLUE!",
    '2023-11-25' : "You skipped college. And yet you walked to tiny bites because i wanted to see you🧁",
    '2023-11-27' : "I changed my lockscreen wallpaper to the moon you clicked.",
    '2023-11-28' : "I had an idea. Biscuit rizz. Went to the grocery store just to click pictures of random biscuit packets and rizz you with 'em.",
    '2023-12-01' : "I asked for earphone buds but you turned it into another gift with a cute note and a hello kitty charm🩷",
    '2023-12-02' : "We got yelled at, at the park. wooopsie",
    '2023-12-04' : "Timro Pratksa!! You learnt a song i said reminded me of you, in a new language, overnight and posted it with the picture i clicked of you💘💘💘",
    '2023-12-05' : "You wiggled your hand on the main road signing that you want me to hold it.",
    '2023-12-06' : "Jumped up and down the footpath together, holding hands, like kids, while dropping me to the bus stop.",
    '2023-12-07' : "We went to promont for the first time! Ran down the hill holding hands💞",
    '2023-12-08' : "Nikhil : 'give me a name for the group' \nUs at the same time : 'Ai Ai Ai'",
    '2023-12-09' : "You sent a few of your archives for the first time👀",
    '2023-12-10' : " 'And maybe..maybe..hopefully...wake up with you next to me' you said, when asked what you think your future would look like.",
    '2023-12-11' : "We kissed while standing for the first time.",
    '2023-12-13' : "You tied my hairtie around your wrist. Couldn't have been more flustered.",
    '2023-12-14' : "You went to friend ma'am for your counselling and told me how we both said the same thing - 'you're taking it too hard on yourself' ",
    '2023-12-15' : "You sang(for almost an hour) me to sleep over a gmeet. ",
    '2023-12-16' : "We had yet another deep conversation gave me the strength to take up any new opportunities henceforth",
    '2023-12-17' : "You almost teared up when i spoke about how i see you making it big and making your parents proud. 'I love it when you so clearly remember everything i've ever told you', you said.",
    '2023-12-18' : "'Can i kiss you?', you asked, after you read my letter",
    '2023-12-19' : "I saw you in formals for the first time. GODLY AND SEXY. \nOh, and we held hands for the first time in front of the gang",
    '2023-12-20' : "I got yelled at by shuchi for being too engrossed in texting you like nothing else mattered on the bus rides home",
    '2023-12-21' : "You opened up about sensual desires for the first time.",
    '2023-12-24' : "My Nat Geo oppurtunity. You were proud of me than me myself. You did everything to lift my mood up",
    '2023-12-25' : "I wrapped your gun. I mean, gift.",
    '2023-12-26' : "SeCrEt SanTa🎄\nNoticed you slyly clicking my pictures while i was clicking others'. I love getting your attention.",
    '2023-12-27' : "We went triples. You were so close to me. I had insane butterflies🦋",
    '2023-12-31' : "'it's super juicy' *slaps my ass kindly. \nYou told me about daxpro!!!\nYou got jealous about the piggyback, I love how that made me feel",
    '2024-01-01' : "You taught me pool. And you looked so proud when i made the winning move.",
    '2024-01-03' : "I took your hoodie home!!!💞🧁",
    '2024-01-05' : "You konjified my cheeks so hard that they turned red.",
    '2024-01-06' : "Ramen Ramen Ramen!!\n*smack smack 'I can still feel the taste of your lips', you said after kissing me.",
    '2024-01-07' : "You showed me the daxpro website you made!!🫶",
    '2024-01-09' : "We had the employability skills activity and you got shortlisted👏",
    '2024-01-10' : "You pulled my cheeks to konjify after you noticed that i was listening to your recording of timro pratiksa on loop.",
    '2024-01-11' : "You placed my hand back on your head everytime i stopped ruffling/playing with it🥰",
    '2024-01-12' : "'kannu camera mela illa edupu la irrundhidhu' \n~pranava at vibha's rangapravesha.",
    '2024-01-13' : "Shuchi compared our constant play fights to nidhi and monish and you said - 'that's them, this is us.'",
    '2024-01-15' : "I pulled the bra move.",
    '2024-01-17' : "You pulled me closer by the chair while sitting at polar bear🦋",
    '2024-01-20' : "Bizpel!! You were soo happy for me.",
    '2024-01-22' : "We encountered a current shock when our hands met.",
    '2024-01-23' : "You went and bought me majjige without me asking for it.",
    '2024-01-25' : "You : 'will you come to hostel for a change?'\n*I nod.\n*takes my hand and starts walking faster.",
    '2024-01-26' : "Your first meet with the daxpro team irl!",
    '2024-01-27' : "You ordered 3 packets of uncle chipps from blinkIt, at bizpel, immediately after i told you i was craving for it.",
    '2024-01-28' : "You gave me flying kisses for the first time before ending the gmeet.",
    '2024-01-30' : "You adjusted my hoodie for me so that my ears were covered cause i had a cold.",
    '2024-02-01' : "You dozed off while on a call with me wherein i was knowingly talking to you for 40mins before cutting it.",
    '2024-02-03' : "You drove me on a scooty for the first time at bizpel.",
    '2024-02-04' : "Migration movie night!!",
    '2024-02-05' : "I asked you if you want a sip of my lemon soda and you said no. \n*comes closer as soon as i take a sip and says 'now give'",
    '2024-02-06' : "You hugged me in front of the gang for the first time.",
    '2024-02-07' : "You covered me with your body to block the sun from my face while i was putting my head down at krispy kreme🍩",
    '2024-02-09' : "You sent a goodmorning gif for the first time🌤️",
    '2024-02-13' : "We got intimate for the first time in polar bear.",
    '2024-02-14' : "Valentines'💞\nYou gave me a peck on the lips before leaving.",
    '2024-02-15' : "*texts 'reached?' in every possible application possible.",
    '2024-02-16' : "Both of us fell asleep while on call tonight.",
    '2024-02-17' : "You carried me down the metro stairs for a few seconds while coming home from bizpel.",
    '2024-02-18' : "You had your 'think time' in deep with me for the first time.",
    '2024-02-19' : "You spammed over a 150 messages of our hugging gif🧁",
    '2024-02-23' : "You kept grabbing my ass such that i couldn't focus on what nikhil, who was sitting beside you, was saying🍑",
    '2024-02-24' : "You kissed me in an auto on the way to bizpel. A risky one.",
    '2024-02-28' : "You call, say 'i love you' and cut the call.",
    '2024-03-01' : "You put the milkshake icing all over my face and licked it off of me.",
    '2024-03-02' : "You massaged my foot because i had a headache🫠",
    '2024-03-03' : "You went around me in circles, kissing my forehead each round.",
    '2024-03-06' : "I was feeling a bit dull, so you muted and called me while we were on a gmeet with nikhil.",
    '2024-03-07' : "You pulled a close enough trophallaxis with milky bar.",
    '2024-03-12' : "You got me two milky bars while picking me up from park in the morning.",
    '2024-03-13' : "You stayed up till 3 with me waiting for my blender file to render.",
    '2024-03-14' : "You touched my boobies for the first time🍦",
    '2024-03-30' : "You came closer to my ear, whispered 'kiss me', and grabbed my boob while kissing me. \nBy far the hottest kiss.",
    '2024-04-01' : "You literally ran home from hostel in the morning. (WITHOUT WAKING ME UP THO👎)",
    '2024-04-06' : "You gently rubbed my thigh in secret under the table while having lunch(bizpel) because i had cramps.",
    '2024-04-07' : "You stayed up with me till 6am on gmeet because i got scared looking at a dark web.",
    '2024-05-06' : "⚽FOOTBALL INJURY⚽",
    '2024-05-09' : "You introduced me as your girlfriend in front of your friends for the first time.",

};

const monthImages = {
    '2023-07': [
        {src : 'july1.png', id: 'july1'}
    ],
    '2023-08': [{src : 'aug1.png', id : 'aug1'}, {src : 'aug2.png', id : 'aug2'}],
    '2023-09': [{src : 'sep1.png', id : 'sep1'}, {src : 'sep2.png', id : 'sep2'}],
    '2023-10': [{src : 'oct1.png', id : 'oct1'} ,{src : 'oct2.png', id : 'oct2'}],
    '2023-11': [{src : 'nov1.png', id : 'nov1'}],
    '2023-12': [{src : 'dec1.png', id : 'dec1'}, {src : 'dec2.png', id : 'dec2'}, {src : 'dec4.png', id : 'dec4'}],
    '2024-01': [{src : 'jan1.png', id : 'jan1'}, {src : 'jan2.png', id : 'jan2'}, {src : 'jan3.png', id : 'jan3'}],
    '2024-02': [{src : 'feb1.png', id : 'feb1'}],
    '2024-03': [{src : 'mar1.png', id : 'mar1'}, {src : 'mar2.png', id : 'mar2'}],
    '2024-04': [{src : 'apr1.png', id : 'apr1'}],
    '2024-05': [{src : 'may2.png', id : 'may2'}, {src : 'may3.png', id : 'may3'}],
    '2024-06': [{src : 'jun1.png', id : 'jun1'}, {src : 'jun2.png', id : 'jun2'}],
    '2024-07': [{src : 'jul1.png', id : 'jul1'}, {src : 'jul2.png', id : 'jul2'}],
    // ... add for all months
   
};

function updateBackgroundImages(date) {
    const backgroundContainer = document.getElementById('background-container');
    backgroundContainer.innerHTML = ''; // Clear previous images

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const key = `${year}-${month}`;

    const images = monthImages[key];
    if (images && images.length > 0) {
        images.forEach(image => {
            const container = document.createElement('div');

    
            container.className = 'polaroid';
            container.id = image.id;
            //container.setAttribute('data-caption', `Memory from ${date.toLocaleString('default', { month: 'long', year: 'numeric' })}`);
            
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = `Memory from ${date.toLocaleString('default', { month: 'long', year: 'numeric' })}`;
            
            container.appendChild(img);
            backgroundContainer.appendChild(container);
        });
    }
}


function generateCalendar(date) {
    calendar.innerHTML = '';
    const year = date.getFullYear();
    const month = date.getMonth();

    monthYear.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    updateBackgroundImages(currentDate);

    for (let i = 0; i < firstDay; i++) {
        calendar.appendChild(document.createElement('div'));
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');

        if (year === 2024 && month === 4) { // May is month 4 in JavaScript (0-indexed)
            dayElement.classList.add('football');

            dayElement.innerHTML = `<span>${day}</span>`;
        } else {
        dayElement.textContent = day;
        }
    


        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        if (notes[dateString]) {
            dayElement.style.backgroundColor = '#ffb3ba';
            dayElement.style.fontWeight = 'bold';
            dayElement.addEventListener('click', () => showNote(dateString));
        }

        calendar.appendChild(dayElement);
    }
}

// Replace the existing showNote function with this:

function showNote(date) {
    noteText.textContent = notes[date];
    modal.style.display = 'block';
    
    // Center the text vertically
    const textHeight = noteText.offsetHeight;
    const containerHeight = noteText.parentElement.offsetHeight;
    noteText.style.marginTop = `${(containerHeight - textHeight) / 2}px`;
}

closeModal.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

prevMonth.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    if (currentDate >= new Date(2023, 6, 1)) {
        generateCalendar(currentDate);
        updateBackgroundImages(currentDate);
    } else {
        currentDate.setMonth(currentDate.getMonth() + 1);
    }
});

nextMonth.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    if (currentDate <= endDate) {
        generateCalendar(currentDate);
        updateBackgroundImages(currentDate);
    } else {
        currentDate.setMonth(currentDate.getMonth() - 1);
    }
});

generateCalendar(currentDate);
