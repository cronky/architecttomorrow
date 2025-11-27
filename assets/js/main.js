function toggleControls() {
    document.body.classList.toggle('controls-hidden');
}

function adjustPosition(value) {
    const banner = document.querySelector('.banner');
    const socialLinks = document.querySelector('.social-links-container');
    const label = document.querySelector('.position-slider label');
    
    // Update label
    label.textContent = `Position: ${value}%`;
    
    // Calculate padding based on slider (0 = bottom, 50 = centre, 100 = top)
    // At 50 (centre), padding-bottom is 0
    // At 100 (top), padding-bottom is 33vh
    // At 0 (bottom), padding-bottom is -33vh (which means padding-top)
    const paddingBottom = ((value - 50) / 50) * 33;
    banner.style.paddingBottom = `${paddingBottom}vh`;
    
    // Adjust social links position proportionally
    const linksTop = 75 - ((value - 50) / 50) * 17;
    socialLinks.style.top = `${linksTop}vh`;
}

function toggleResources() {
    const panel = document.getElementById('resourcesPanel');
    panel.classList.toggle('open');
}

function changeBackground(type) {
    const banner = document.querySelector('.banner');
    const buttons = document.querySelectorAll('.color-controls .color-btn');
    
    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    switch(type) {
        case 'gradient':
            banner.style.background = 'linear-gradient(135deg, #2c6b4c 0%, #8eb95b 100%)';
            break;
        case 'blueGradient':
            banner.style.background = 'linear-gradient(135deg, #1e3a5f 0%, #5b9bd5 100%)';
            break;
        case 'redGradient':
            banner.style.background = 'linear-gradient(135deg, #6b0f0f 0%, #cd5c5c 100%)';
            break;
        case 'orangeGradient':
            banner.style.background = 'linear-gradient(135deg, #d35400 0%, #f39c12 100%)';
            break;
        case 'autumnal':
            banner.style.background = 'linear-gradient(135deg, #6b4423 0%, #d68347 100%)';
            break;
        case 'dark':
            banner.style.background = '#2c6b4c';
            break;
        case 'light':
            banner.style.background = '#8eb95b';
            break;
        case 'grey':
            banner.style.background = 'linear-gradient(135deg, #3a3a3a 0%, #d4d4d4 100%)';
            break;
        case 'white':
            banner.style.background = 'white';
            break;
        case 'black':
            banner.style.background = 'black';
            break;
    }
}

function changeLogoColors(colorScheme) {
    const textContent = document.querySelector('.text-content');
    const paths = document.querySelectorAll('.logo path');
    const buttons = document.querySelectorAll('.logo-controls .color-btn');
    
    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    let colors = {};
    
    switch(colorScheme) {
        case 'green':
            colors = {
                outline: '#0d3d1f',
                outer: '#9ce599',
                middle: '#b8edb5',
                inner: '#d4f5d2',
                text: '#d4f5d2'
            };
            break;
        case 'blue':
            colors = {
                outline: '#1e3a5f',
                outer: '#5b9bd5',
                middle: '#8ab8e6',
                inner: '#c5ddf5',
                text: '#c5ddf5'
            };
            break;
        case 'red':
            colors = {
                outline: '#0d3d1f',
                outer: '#6b0f0f',
                middle: '#a52a2a',
                inner: '#cd5c5c',
                text: '#cd5c5c'
            };
            break;
        case 'purple':
            colors = {
                outline: '#4a235a',
                outer: '#9b59b6',
                middle: '#bb8fce',
                inner: '#e8daef',
                text: '#e8daef'
            };
            break;
        case 'orange':
            colors = {
                outline: '#7d3c0a',
                outer: '#e67e22',
                middle: '#f0ad75',
                inner: '#f9dcc4',
                text: '#f9dcc4'
            };
            break;
        case 'autumnal':
            colors = {
                outline: '#3d1f0a',
                outer: '#8b4513',
                middle: '#cd853f',
                inner: '#daa520',
                text: '#daa520'
            };
            break;
        case 'grey':
            colors = {
                outline: '#2a2a2a',
                outer: '#666666',
                middle: '#999999',
                inner: '#d9d9d9',
                text: '#d9d9d9'
            };
            break;
        case 'white':
            colors = {
                outline: '#333333',
                outer: '#ffffff',
                middle: '#ffffff',
                inner: '#ffffff',
                text: '#ffffff'
            };
            break;
        case 'black':
            colors = {
                outline: '#666666',
                outer: '#000000',
                middle: '#000000',
                inner: '#000000',
                text: '#000000'
            };
            break;
    }
    
    // Update text color and outline
    if (textContent) {
        textContent.style.color = colors.text;
        textContent.style.webkitTextStroke = `1px ${colors.outline}`;
        textContent.style.textStroke = `1px ${colors.outline}`;
    }
    
    // Update logo paths (outline, fill, outline, fill, outline, fill)
    // Outer A: darkest, Left leg (smallest): lightest, Right leg (largest): middle
    if (paths.length >= 6) {
        paths[0].setAttribute('stroke', colors.outline);
        paths[1].setAttribute('stroke', colors.outer);
        paths[2].setAttribute('stroke', colors.outline);
        paths[3].setAttribute('stroke', colors.inner);
        paths[4].setAttribute('stroke', colors.outline);
        paths[5].setAttribute('stroke', colors.middle);
    }
}

// Search/Filter Functionality
function filterResources() {
    const input = document.getElementById('resourceSearch');
    const filter = input.value.toLowerCase();
    const items = document.getElementsByClassName('resource-item');

    for (let i = 0; i < items.length; i++) {
        const title = items[i].querySelector('.resource-title').textContent || items[i].querySelector('.resource-title').innerText;
        const tags = items[i].querySelector('.resource-tags').textContent || items[i].querySelector('.resource-tags').innerText;
        
        if (title.toLowerCase().indexOf(filter) > -1 || tags.toLowerCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}
