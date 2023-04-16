


function getPost(postImage, username, timepassed, postCaption, postImageLink, postLikes, postComments, postShares){

    const _post = `
<!-- Post start-->
            <div class="album box">
             <div class="status-main">
              <img src="${postImage}" class="status-img" />
              <div class="album-detail">
               <div class="album-title"><strong>${username}</strong> created new <span>post</span></div>
               <div class="album-date">${timepassed}</div>
              </div>
              <button class="intro-menu"></button>
             </div>
             <div class="album-content">${postCaption}
              <div class="album-photos">
               <img src="${postImageLink[0]}" alt="" class="album-photo" />
               <div class="album-right">
                <img src="${postImageLink[1]}" alt="" class="album-photo" />
                <img src="${postImageLink[2]}" alt="" class="album-photo" />
               </div>
              </div>
             </div>
             <div class="album-actions">
              <a href="#" class="album-action">
               <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
               </svg>
               ${postLikes}
              </a>
              <a href="#" class="album-action">
               <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
               </svg>
               ${postComments}
              </a>
              <a href="#" class="album-action">
               <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1" viewBox="0 0 24 24">
                <path d="M17 1l4 4-4 4" />
                <path d="M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4" />
                <path d="M21 13v2a4 4 0 01-4 4H3" />
               </svg>
               ${postShares}
              </a>
             </div>
            </div>

            <!-- Post end -->

`
return _post
}

function setStatusShare(profileImgLink, username){
    const statusShare = `
    <div class="status box">
             <div class="status-menu">
              <a class="status-menu-item active" href="#">Status</a>
              <a class="status-menu-item" href="#">Photos</a>
              <a class="status-menu-item" href="#">Videos</a>
             </div>
             <div class="status-main">
              <img src="${profileImgLink}" class="status-img">
              <textarea class="status-textarea" placeholder="Write something to ${username}.."></textarea>
             </div>
             <div class="status-actions">
              <a href="#" class="status-action">
               <svg viewBox="-42 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M333.7 123.3c0 33.9-12.2 63.2-36.2 87.2-24 24-53.3 36.1-87.1 36.1h-.1c-33.9 0-63.2-12.1-87.1-36.1-24-24-36.2-53.3-36.2-87.2 0-33.9 12.2-63.2 36.2-87.2 24-24 53.2-36 87-36.1h.2c33.8 0 63.2 12.2 87.1 36.1 24 24 36.2 53.3 36.2 87.2zm0 0" fill="#ffbb85" />
                <path d="M427.2 424c0 26.7-8.5 48.3-25.3 64.3-16.5 15.7-38.4 23.7-65 23.7H90.2c-26.6 0-48.5-8-65-23.7C8.5 472.3 0 450.7 0 423.9c0-10.2.3-20.4 1-30.2a302.7 302.7 0 0112.1-64.9c3.3-10.3 7.8-20.5 13.4-30.3 5.8-10.2 12.5-19 20.1-26.3a89 89 0 0129-18.2c11.2-4.4 23.7-6.7 37-6.7 5.2 0 10.3 2.2 20 8.5l21 13.5c6.6 4.3 15.7 8.3 27 11.9a107.7 107.7 0 0033 5.3c11 0 22-1.8 33-5.3 11.2-3.6 20.3-7.6 27-12l21-13.4c9.7-6.3 14.7-8.5 20-8.5 13.3 0 25.7 2.3 37 6.7a89 89 0 0128.9 18.2c7.6 7.3 14.4 16.1 20.2 26.3 5.5 9.8 10 20 13.3 30.3a305.5 305.5 0 0112.1 64.9c.7 9.8 1 20 1 30.2zm0 0" fill="#6aa9ff" />
                <path d="M210.4 246.6h-.1V0c34 0 63.3 12.2 87.2 36.1 24 24 36.2 53.3 36.2 87.2 0 33.9-12.2 63.2-36.2 87.2-24 24-53.3 36.1-87.1 36.1zm0 0" fill="#f5a86c" />
                <path d="M427.2 424c0 26.7-8.5 48.3-25.3 64.3-16.5 15.7-38.4 23.7-65 23.7H210.2V286.5h3.3c11 0 22-1.8 33-5.3 11.2-3.6 20.3-7.6 27-12l21-13.4c9.7-6.3 14.7-8.5 20-8.5 13.3 0 25.7 2.3 37 6.7a89 89 0 0128.9 18.2c7.6 7.3 14.4 16.1 20.2 26.3 5.5 9.8 10 20 13.3 30.3a305.5 305.5 0 0112.1 64.9c.7 9.8 1 20 1 30.2zm0 0" fill="#2682ff" />
               </svg>
               People
              </a>
              <a href="#" class="status-action">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M87.084 192c-.456-5.272-.688-10.6-.688-16C86.404 78.8 162.34 0 256.004 0s169.6 78.8 169.6 176c0 5.392-.232 10.728-.688 16h.688c0 96.184-169.6 320-169.6 320s-169.6-223.288-169.6-320h.68zm168.92 32c36.392 1.024 66.744-27.608 67.84-64-1.096-36.392-31.448-65.024-67.84-64-36.392-1.024-66.744 27.608-67.84 64 1.096 36.392 31.448 65.024 67.84 64z" fill="#e21b1b" />
               </svg>
               Check in
              </a>
              <a href="#" class="status-action">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <circle cx="256" cy="256" r="256" fill="#ffca28" />
                <g fill="#6d4c41">
                 <path d="M399.68 208.32c-8.832 0-16-7.168-16-16 0-17.632-14.336-32-32-32s-32 14.368-32 32c0 8.832-7.168 16-16 16s-16-7.168-16-16c0-35.296 28.704-64 64-64s64 28.704 64 64c0 8.864-7.168 16-16 16zM207.68 208.32c-8.832 0-16-7.168-16-16 0-17.632-14.368-32-32-32s-32 14.368-32 32c0 8.832-7.168 16-16 16s-16-7.168-16-16c0-35.296 28.704-64 64-64s64 28.704 64 64c0 8.864-7.168 16-16 16z" />
                </g>
                <path d="M437.696 294.688c-3.04-4-7.744-6.368-12.736-6.368H86.4c-5.024 0-9.728 2.336-12.736 6.336-3.072 4.032-4.032 9.184-2.688 14.016C94.112 390.88 170.08 448.32 255.648 448.32s161.536-57.44 184.672-139.648c1.376-4.832.416-9.984-2.624-13.984z" fill="#fafafa" />
               </svg>
               Mood
              </a>
              <button class="status-share">Share</button>
             </div>
    `
    return statusShare
}

function setDashboard(data){

    const _dash = `
    <div class="intro-title">
              Dashboard
              <button class="intro-menu"></button>
             </div>
             <div class="user">
              <img src="/images/carbonCredits.jpg" alt="" class="user-img">
              <div class="username">${data.carbonCredits} Carbon Credits</div>
             </div>
             <div class="user">
              <img src="/images/carbonCredits.jpg" alt="" class="user-img">
              <div class="username">${data.carbonOffsetted} Carbon Offseted</div>
             </div>
             <div class="user">
              <img src="/images/rankPlaceholder.png" alt="" class="user-img">
              <div class="username">${data.rank} Carbon Ranking</div>
             </div>
            </div>
    `

    return _dash

}

function setIntroBox(data){
    const intro = `
    <div class="intro-title">
              Introduction
              <button class="intro-menu"></button>
             </div>
             <div class="info">
              <div class="info-item">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 503.889 503.889" fill="currentColor">
                <path d="M453.727 114.266H345.151V70.515c0-20.832-16.948-37.779-37.78-37.779H196.517c-20.832 0-37.78 16.947-37.78 37.779v43.751H50.162C22.502 114.266 0 136.769 0 164.428v256.563c0 27.659 22.502 50.161 50.162 50.161h403.565c27.659 0 50.162-22.502 50.162-50.161V164.428c0-27.659-22.503-50.162-50.162-50.162zm-262.99-43.751a5.786 5.786 0 015.78-5.779h110.854a5.786 5.786 0 015.78 5.779v43.751H190.737zM32 164.428c0-10.015 8.147-18.162 18.162-18.162h403.565c10.014 0 18.162 8.147 18.162 18.162v23.681c0 22.212-14.894 42.061-36.22 48.27l-167.345 48.723a58.482 58.482 0 01-32.76 0L68.22 236.378C46.894 230.169 32 210.321 32 188.109zm421.727 274.725H50.162c-10.014 0-18.162-8.147-18.162-18.161V253.258c8.063 6.232 17.254 10.927 27.274 13.845 184.859 53.822 175.358 52.341 192.67 52.341 17.541 0 7.595 1.544 192.67-52.341 10.021-2.918 19.212-7.613 27.274-13.845v167.733c.001 10.014-8.147 18.162-18.161 18.162z" />
               </svg>
               Product Designer at <a href="#">Bravebist</a>
              </div>
              <div class="info-item">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <path d="M9 22V12h6v10" />
               </svg>
               Live in <a href="#">Hanoi, Vietnam</a>
              </div>
              <div class="info-item">
               <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path d="M437 75C388.7 26.6 324.4 0 256 0S123.3 26.6 75 75C26.6 123.3 0 187.6 0 256s26.6 132.7 75 181c48.3 48.4 112.6 75 181 75s132.7-26.6 181-75c48.4-48.3 75-112.6 75-181s-26.6-132.7-75-181zM252.4 481.9c-52-.9-103.7-19.5-145.2-55.8L256 277.2l21.7 21.8a165.9 165.9 0 00-35.7 87c-3.5 30.5 0 63.3 10.4 95.9zM299 320.3l105.7 105.8a224.8 224.8 0 01-121.3 54.1C262 419.5 268 360.3 299 320.3zm21.2-21.2c40-31 99.2-37 160-15.6A224.8 224.8 0 01426 404.8zM482 252.4a231.7 231.7 0 00-96-10.4 165.9 165.9 0 00-87 35.7L277.3 256l148.9-148.8c36.3 41.5 55 93.2 55.8 145.2zm-290.2-39.5c-40 31-99.2 37-160 15.6A224.8 224.8 0 0186 107.2zm-84.5-127a224.8 224.8 0 01121.3-54.1C250 92.5 244 151.7 213 191.7zM270 126c3.5-30.5 0-63.3-10.4-95.9 52 .9 103.7 19.5 145.2 55.8L256 234.8 234.3 213a165.9 165.9 0 0035.7-87zM30 259.6a242 242 0 0072.7 11.7c7.8 0 15.6-.5 23.2-1.3a165.9 165.9 0 0087-35.7l21.8 21.7L85.9 404.8a225.3 225.3 0 01-55.8-145.2z" />
               </svg>
               Player name <a href="#">${data.handle}</a>
              </div>
             </div>
    `

    return intro
}

export function setPage(_uid){
    console.log("Setting page")

    

    fetch('http://localhost:4000/profile/pdata/dashboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          uid: _uid
        })
      }).then(response => response.json())
      .then(data => {
        // access the post data from the response
        // dashData = data
        const _dashboard = setDashboard(data)
        document.getElementById("dashboard").innerHTML = _dashboard

        const _intro = setIntroBox(data)
        document.getElementById("introBox").innerHTML = _intro

        const _statusShare = setStatusShare("/images/profilePlaceholder.png", "stharanzn");
        document.getElementById("postContainer").innerHTML += _statusShare
        const _post = getPost("/images/profilePlaceholder.png", "stharanzn", "6 hrs ago", "Example Post", ["/images/homepageBg.jpg","/images/homepageBg2.jpg", "/images/homepageBg2F.png"], 69, 42, 0)
        const _post2 = getPost("/images/profilePlaceholder.png", "stharanzn", "12 hrs ago", "Example Post 2", ["/images/forestation.jpg","/images/smoke.jpg", "/images/factory-img.png"], 6996, 420,80)
        document.getElementById("postContainer").innerHTML += _post
        document.getElementById("postContainer").innerHTML += _post2

      })
      .catch(error => console.error(error));
    



    


    // document.getElementById("postContainer").innerHTML += _postPage    
}