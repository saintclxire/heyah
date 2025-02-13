document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");

  // GIF sources
  const firstImg = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDZtOG5vdjkycTlmeDJqMWZyZWFsZ2xybjY2cnlleThjaHlvZHhvMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/s5pqEUOsNQISDw6Eu7/giphy.gif";
  
  const secondImg = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmQ1cHhjb2JpcWQzYTI1ZGduYWdreHBmYjd6dHk0dHhhY3htaGxrYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/sRLfDd1R33y1OHGMUB/giphy.gif";

  // Expanded "No" button phrases (100 different responses)
  const NO_PHRASES = [
    "No? My dear, you wound me. 💔", "Are you certain, my love? 🥺", 
    "But we belong together, don't we? 💕", "I shan't give up so easily.", 
    "One reconsideration, for my sake? 🙏", "You break my heart so effortlessly... 😭", 
    "A 'perhaps' would be kinder.", "Please, love, do not be cruel. 🥹", 
    "You wound my very soul...", "Ah, but I shall try again!", 
    "Surely, you jest? 😢", "You toy with my affections...", 
    "But I have prepared chocolates for you. 🍫", "Does love not move you? 💔", 
    "Spare a thought for the bears, darling. 🐻", "You wound me with every refusal...", 
    "Tell me you do not mean it.", "A whisper of 'yes' is all I ask.", 
    "Grant me but the smallest hope!", "If you refuse again, I shall surely weep. 😭", 
    "You test the limits of my devotion!", "Would a gift sway your heart? 🎁", 
    "My persistence is but proof of my love!", "I am on bended knee, my dear...", 
    "Surely, this is but a jest? 😂", "Would you deny me even a hug? 🤗", 
    "A 'yes' would make my heart dance!", "Do not make me beg, dearest...", 
    "You delight in this mischief, I see!", "Let us strike a deal, my love.", 
    "You reduce me to desperation!", "You still deny me? Unthinkable!", 
    "Perhaps a gentler approach? 😇", "I implore you, my dearest! 🥺", 
    "But why must you be so stubborn? 😭", "For the last time, I beseech thee!", 
    "You shatter my heart with your words. 💔", "Even the bear weeps for me...", 
    "Do you take joy in my suffering? 😂", "You play a dangerous game, my love. 😜", 
    "Surely, you cannot be serious?", "Ah, so this is your grand scheme...", 
    "You simply wish to see me try again!", "What must I do to win your favor? 😅", 
    "You challenge me, and I accept!", "Am I not worthy of a single 'yes'?", 
    "A flower, then? 🌸 A token of my devotion.", "I am nothing if not a gentleman.", 
    "The stars themselves urge you to say yes!", "Shall I recite poetry for you?", 
    "I cannot—no, I will not—accept this fate!"
];


  // First button
  const firstBtn = document.createElement("button");
  firstBtn.classList.add("first-btn");

  const textSpan1 = document.createElement("span");
  textSpan1.classList.add("text");
  textSpan1.innerText = "Heyah!";

  firstBtn.appendChild(textSpan1);
  app.appendChild(firstBtn);

  const body = document.querySelector("body");

  firstBtn.addEventListener("click", function () {
    if (!this.classList.contains("active")) {
      this.classList.add("active");
      textSpan1.style.display = "none";
    } else {
      // Apply transition styles
      body.style.transition = "background-color 1s ease-in-out";
      body.style.backgroundColor = "#bf616a";

      this.style.transition = "transform 1s ease-out, opacity 1s ease-in";
      this.style.transform = "scale(5)"; // Slow expansion
      this.style.opacity = "0"; // Fast fade-out

      // Wait for expansion to complete, then load next scene
      setTimeout(() => {
        const img1 = document.createElement("img");
        img1.src = firstImg;
        img1.classList.add("fade-in-slow");

        const heading1 = document.createElement("h2");
        heading1.innerText = "May I have the honor of being your Valentine?";
        heading1.classList.add("fade-in-slow");

        const text1 = document.createElement("p");
        text1.innerText = "Forever yours?";
        text1.classList.add("fade-in-slow");

        app.appendChild(img1);
        app.appendChild(heading1);
        app.appendChild(text1);

        // Buttons
        const btnContainer = document.createElement("div");
        btnContainer.classList.add("button-row");

        const yesBtn = document.createElement("button");
        yesBtn.classList.add("yes-btn", "fade-in-slow");
        yesBtn.innerText = "Yes";

        const noBtn = document.createElement("button");
        noBtn.classList.add("no-btn", "fade-in-slow");
        noBtn.innerText = "No";

        btnContainer.appendChild(yesBtn);
        btnContainer.appendChild(noBtn);
        app.appendChild(btnContainer);

        firstBtn.style.display = "none";

        let noClicks = 0;

        // Handle "No" button click
        noBtn.addEventListener("click", function () {
          noClicks++;

          yesBtn.style.fontSize = `${(noClicks * 20) + 16}px`;
          yesBtn.style.padding = `${(noClicks * 5) + 10}px ${(noClicks * 10) + 20}px`;

          noBtn.innerText = NO_PHRASES[Math.min(noClicks, NO_PHRASES.length - 1)];
        });

        // Handle "Yes" button click
        yesBtn.addEventListener("click", function () {
          app.innerHTML = "";

          const img2 = document.createElement("img");
          img2.src = secondImg;
          img2.classList.add("fade-in-slow");

          const heading2 = document.createElement("h2");
          heading2.innerText = "I love you baby!";
          heading2.classList.add("fade-in-slow");

          const text2 = document.createElement("p");
          text2.innerText = "This means the world to me.";
          text2.classList.add("fade-in-slow");

          app.appendChild(img2);
          app.appendChild(heading2);
          app.appendChild(text2);
        });
      }, 1000); // Wait for expansion to complete
    }
  });
});
