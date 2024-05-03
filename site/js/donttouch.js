const imageTitles = [
                    "don't touch please!",
                    "no touching!",
                    "put your hand away!",
                    "hey!",
                    "go away!",
                    "too close!",
                    "i'm not foud of tactile contact",
                    "please stop"
                ];

                const randomImage = document.getElementById('aj');

                randomImage.addEventListener('mouseover', () => {
                    const randomIndex = Math.floor(Math.random() * imageTitles.length);
                    randomImage.title = imageTitles[randomIndex];
                });