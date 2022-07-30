//basically what i want to is to create an api with sweet names i call my baby
//so it should be quite basic
const express = require('express')
const app= express()
const PORT=8000
const sweetnames=[
	"No matter how many years pass, I cannot stop falling in love with you!",
"You are everything that I desire for in life, I promise to love you all my life.",
"Thanks for being there for me always, I need you to be in my life forever!",
"You are the most gorgeous, lovely, cute, beautiful, dazzling, sensuous and stunning. You are my everything. I just can’t imagine my life without you.","As each day passes, you just keep coming closer to my heart. May the trust and understanding that we share among us grow with each passing day. I love you.","I can’t imagine a life without you, darling. I feel lucky to have you in my life.","You are the most gorgeous, lovely, cute, beautiful, dazzling, sensuous and stunning. You are my everything. I just can’t imagine my life without you.","Our relationship is like Tom and Jerry. We tease each other, chase each other, knock down each other, irritate each other but we cannot live without each other.","My sweetheart, I must be the luckiest man to have someone like you in my life! Every day of my life is beautiful because of you! You are my everything!","Words will fall short if I want to describe how much you mean to me, but I hope my love tells you what my speeches cannot! I love you, angel.","Baby, you are not just my partner, but my best friend, my no. 1 supporter, my mentor, my therapist, and my happiness inducer. I love you!","My love, you are the kindest person I have ever met. You are amazing!","I may not be a perfect boyfriend. But my love for you is the truest of all. Every single beat of my heart says it’s true!"," Baby, all my stress disappears when you are with me! You are my happiness!","I just want our love to last. Because you are one of a kind I can’t get you off my mind. I love you.","I’d rather be in your heart, than in your mind. For the mind can forget, the heart will always remember. I love you, my dearest.","A thousand things in between us.. Low Battery, Busy Network, No Coverage, No Time, Have Work, But still when the Mobile beeps, I think it’s you.","I love you and never want to let go of you, for life without you would be miserable.","I could write a thousand poems describing my love for you but it would still not be enough. Words are too tender to carry the weight of my love!","You are the treasure that I have been looking for all my life. Thank you for wrapping your warm hands around me and giving me a shelter.","The biggest inspiration in life is the support of the loved one. For all that you have done for me, I can only love you more than ever!","The biggest joy of my life is waking up every morning knowing that you are mine. Nothing can be more satisfying than this feeling!","You can only win a beautiful heart with true love. My love for you was true and pure. And you were kind enough to say yes!","My heart was iron and you were the one with a magnet. So how could I resist falling for you! I love you sweetheart!"
]

//make a simple get request and serve the static html file to check
app.get('/sweet-names-api',(req,res)=>{
	res.json(sweetnames)
})










app.listen(PORT,()=>{
	console.log(`server is running on port ${PORT}, you better go catch it`)
})