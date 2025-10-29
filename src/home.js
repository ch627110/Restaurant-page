import img from './img/andres-gavino-eOijYEhhSnY-unsplash.jpg'

export const pageLoad = () => {
    const content = document.getElementById('content')

    const headline = document.createElement('h2')
    const image = document.createElement('img')
    const overview = document.createElement('p')

    headline.textContent = 'Christopher\'s Totally-Real Restaurant'
    image.src = img
    overview.textContent = `We’re all about bringing people together over delicious, 
    freshly made dishes. From the first bite to the last, every meal is crafted with 
    care using high-quality ingredients and bold flavors. Whether you’re here for a 
    quick lunch, a cozy dinner, or a night out with friends, you’ll always find warm 
    service, inviting ambiance, and food that keeps you coming back for more.`

    content.appendChild(headline)
    content.appendChild(image)
    content.appendChild(overview) 
}