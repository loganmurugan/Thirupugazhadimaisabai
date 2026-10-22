THIRUPUGAZHADIMAISABAI & ARAKATTALAI — WEBSITE UPDATE

FILES TO UPLOAD
Upload index.html, style.css, script.js, images/ and audio/ together to the existing GitHub Pages publishing folder. Back up the current files first. Extract the ZIP before uploading. Keep any existing gallery photos or recordings. Do not upload the enclosing sabai-content-update folder as an extra level.

MUSIC SETUP
The page now has an optional native audio player under Devotional music. Visitors control Play/Pause, seeking and volume where supported by their browser. There is no autoplay or opening popup.
No actual song was supplied. Until a file is configured, the page says no recording is available and does not request a missing MP3.
1. Put your recording in audio/murugan-song.mp3. Use audio you may publish.
2. Open script.js and change musicSrc: '' to musicSrc: 'audio/murugan-song.mp3'.
3. Optionally enter a recordingTitle.
4. Upload the song and updated script.js together.
To replace the song later, upload a versioned filename and update musicSrc.

SABAI MEMBERS
The header has a Sabai Members option. To add public names and roles, edit members in SITE_CONFIG in script.js, for example:
  members: [
    { name: 'Approved member name', role: 'Approved role' }
  ]
The example is a format guide, not a real member. Publish only names/roles approved for public display. This section is not a private membership database or admin panel.

CONTENT
Updated English name: Thirupugazhadimaisabai & Arakattalai.
Updated Tamil name: திருப்புகழ் அடிமை சபை & அறக்கட்டளை.
Added daily classes as requested; exact times/location need confirmation.
Added a bilingual beginner learning guide, optional listening section, members section and FAQs.
No founding year, organisers or event dates were invented. Existing unconfirmed event dates remain TBA. Existing contact details were carried over and should be checked.

JOIN FORM
The form is still an email enquiry, not stored applications. Set contactEmail in SITE_CONFIG to the confirmed Sabai address to enable it. A storage backend/Google Form must be connected separately for saved applications. Do not store private application data in the public repository.

VERIFY AFTER UPLOAD
Check the renamed header, Classes/Members links, Tamil/English, mobile menu and image. With no music configured, no broken-song message should appear. After uploading a song, check Play, Pause and seek on a phone. Check the contact address before enabling the enquiry form.

This package was prepared separately. Your original folder was not modified and the website was not published.

HEADER TITLES
Tamil and English header titles use site-title classes instead of language-toggle classes. Both remain visible in both modes. They share an 18px font size (12.8px on mobile, assuming the default 16px root size).
