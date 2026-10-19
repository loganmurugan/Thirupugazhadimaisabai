let currentLanguage = "ta";

const languageButton = document.getElementById("language");

function changeLanguage(language) {
  currentLanguage = language;

  document.documentElement.lang = language;

  document.querySelectorAll("[data-ta][data-en]").forEach(element => {
    element.textContent = element.dataset[language];
  });

  languageButton.textContent =
    language === "ta" ? "English" : "தமிழ்";
}

languageButton.addEventListener("click", () => {
  const nextLanguage =
    currentLanguage === "ta" ? "en" : "ta";

  changeLanguage(nextLanguage);
});

changeLanguage("ta");
const songs = [
  {
    title: "முத்தைத்தரு பத்தித் திருநகை",
    english: "Muththaiththaru",
    lyrics: "",
    meaning: ""
  },
  {
    title: "நாத விந்து கலாதீ நமோ நம",
    english: "Naadha Vindhu",
    lyrics: "",
    meaning: ""
  },
  {
    title: "ஏறுமயில் ஏறி விளையாடும் முகம்",
    english: "Eru Mayil Eri",
    lyrics: "",
    meaning: ""
  }
];

const songSearch = document.getElementById("songSearch");
const songList = document.getElementById("songList");

function renderSongs(searchText = "") {
  songList.replaceChildren();

  const filteredSongs = songs.filter(song =>
    (song.title + " " + song.english)
      .toLocaleLowerCase()
      .includes(searchText.toLocaleLowerCase())
  );

  if (filteredSongs.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "No matching songs found.";
    songList.appendChild(empty);
    return;
  }

  filteredSongs.forEach(song => {
    const card = document.createElement("details");
    card.className = "song-card";

    const heading = document.createElement("summary");
    heading.textContent = song.title + " — " + song.english;

    const lyrics = document.createElement("p");
    lyrics.textContent = song.lyrics ||
      "பாடல் வரிகள் விரைவில் சேர்க்கப்படும்.";

    const meaning = document.createElement("p");
    meaning.textContent = song.meaning ||
      "பாடல் விளக்கம் விரைவில் சேர்க்கப்படும்.";

    card.append(heading, lyrics, meaning);
    songList.appendChild(card);
  });
}

songSearch.addEventListener("input", () => {
  renderSongs(songSearch.value);
});

renderSongs();

const events = [
  {
    tamil: "திருப்புகழ் பாராயணம்",
    english: "Thiruppugazh Parayanam",
    date: "",
    location: "",
    description: "திருப்புகழ் பாடல்கள் பாராயணம்"
  },
  {
    tamil: "மகா ருத்ராபிஷேகம்",
    english: "Maha Rudra Abhishekam",
    date: "",
    location: "",
    description: "சிறப்பு அபிஷேக வழிபாடு"
  },
  {
    tamil: "மகா யாகம்",
    english: "Maha Yagam",
    date: "",
    location: "",
    description: "வேத முறைப்படி யாக வழிபாடு"
  },
  {
    tamil: "கந்த சஷ்டி விழா",
    english: "Skanda Sashti Festival",
    date: "",
    location: "",
    description: "முருகப்பெருமானின் சிறப்பு வழிபாடு"
  }
];

const eventList = document.getElementById("eventList");

function renderEvents() {
  eventList.replaceChildren();

  events.forEach(event => {
    const card = document.createElement("article");
    card.className = "event-card";

    const title = document.createElement("h3");
    title.textContent = currentLanguage === "ta"
      ? event.tamil
      : event.english;

    const date = document.createElement("p");
    date.textContent = event.date ||
      (currentLanguage === "ta"
        ? "தேதி பின்னர் அறிவிக்கப்படும்"
        : "Date to be announced");

    const location = document.createElement("p");
    location.textContent = event.location ||
      (currentLanguage === "ta"
        ? "இடம் பின்னர் அறிவிக்கப்படும்"
        : "Location to be announced");

    const description = document.createElement("p");
    description.textContent = event.description;

    card.append(title, date, location, description);
    eventList.appendChild(card);
  });
}

renderEvents();

document.getElementById("language")
  .addEventListener("click", renderEvents);

  const galleryPhotos = [
  {
    tamil: "ஆலய தரிசனம்",
    english: "Temple Darshan",
    image: "images/திருப்புகழ்-பாராயணம்.jpeg"
  },
  {
    tamil: "மகா ருத்ராபிஷேகம்",
    english: "Maha Rudra Abhishekam",
    image: "images/மகா-ருத்ராபிஷேகம்.jpeg"
  },
  {
    tamil: "யாக வழிபாடு",
    english: "Yagam Ceremony",
    image: "images/மகா-யாகம்.jpeg"
  },
  {
    tamil: "முருகன் திருவிழா",
    english: "Lord Murugan Festival",
    image: "images/கந்த-சஷ்டி-விழா.jpeg"
  }
];

const galleryVideos = [
  {
    tamil: "திருப்புகழ் பாராயணம்",
    english: "Thirupugazh Parayanam",
    youtubeId: ""
  },
  {
    tamil: "ஆன்மிக நிகழ்ச்சிகள்",
    english: "Devotional Programs",
    youtubeId: ""
  }
];

function renderGallery() {
  const photoContainer =
    document.getElementById("photoGallery");

  const videoContainer =
    document.getElementById("videoGallery");

  photoContainer.replaceChildren();
  videoContainer.replaceChildren();

  galleryPhotos.forEach(photo => {
    const card = document.createElement("article");
    card.className = "gallery-card";

    if (photo.image) {
      const img = document.createElement("img");
      img.src = photo.image;
      img.alt = currentLanguage === "ta"
        ? photo.tamil
        : photo.english;
      img.loading = "lazy";
      card.appendChild(img);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "gallery-placeholder";
      placeholder.textContent = ":camera:";
      card.appendChild(placeholder);
    }

    const title = document.createElement("h4");
    title.textContent = currentLanguage === "ta"
      ? photo.tamil
      : photo.english;

    card.appendChild(title);
    photoContainer.appendChild(card);
  });

  galleryVideos.forEach(video => {
    const card = document.createElement("article");
    card.className = "gallery-card";

    if (video.youtubeId) {
      const iframe = document.createElement("iframe");
      iframe.src =
        "https://www.youtube-nocookie.com/embed/" +
        encodeURIComponent(video.youtubeId);
      iframe.title = currentLanguage === "ta"
        ? video.tamil
        : video.english;
      iframe.loading = "lazy";
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      card.appendChild(iframe);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "gallery-placeholder";
      placeholder.textContent = ":arrow_forward:";
      card.appendChild(placeholder);
    }

    const title = document.createElement("h4");
    title.textContent = currentLanguage === "ta"
      ? video.tamil
      : video.english;

    card.appendChild(title);
    videoContainer.appendChild(card);
  });
}

renderGallery();

document.getElementById("language")
  .addEventListener("click", renderGallery);
  const membershipForm =
  document.getElementById("membershipForm");

const formMessage =
  document.getElementById("formMessage");


const sabaiEmail = "contact@thirupugazhadimaisabai.com";

membershipForm.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!membershipForm.reportValidity()) return;

  if (sabaiEmail === "contact@thirupugazhadimaisabai.com") {
    formMessage.textContent = currentLanguage === "ta"
      ? "முதலில் சபையின் மின்னஞ்சல் முகவரியை அமைக்கவும்."
      : "Please configure the Sabai email address first.";
    return;
  }

  const name =
    document.getElementById("memberName").value.trim();

  const email =
    document.getElementById("memberEmail").value.trim();

  const phone =
    document.getElementById("memberPhone").value.trim();

  const city =
    document.getElementById("memberCity").value.trim();

  const interest =
    document.getElementById("memberInterest");

  const interestText =
    interest.options[interest.selectedIndex].dataset.en;

  const subject =
    "Thirupugazh Adimai Sabai - Membership Enquiry";

  const body = [
    "Vanakkam,",
    "",
    "I would like to enquire about the Sabai.",
    "",
    "Name: " + name,
    "Email: " + email,
    "Phone: " + phone,
    "City: " + city,
    "Interest: " + interestText,
    "",
    "Thank you."
  ].join("\n");

  const mailto =
    "mailto:" + sabaiEmail +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  formMessage.textContent = currentLanguage === "ta"
    ? "மின்னஞ்சல் செயலி திறக்கும். அனுப்புவதை உறுதிசெய்யவும்."
    : "Your email app will open. Please review and send.";

  window.location.href = mailto;
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

function closeMobileMenu() {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMobileMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 600) {
    closeMobileMenu();
  }
});