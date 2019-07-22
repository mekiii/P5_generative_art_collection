# Generative art collection
This a repository filled with all my explorations all around generative art via [P5](https://p5js.org/). 
You can see the demo [here](https://mekiii.github.io/p5_generative_art_collection/). 

## Install
The installation is quite simple. After downloading or cloning the repository: Open the index.html file in a browser. 
You can switch between sketches via pressing the arrow keys left and right or by opening the Detailtab on the bottom right and clicking the arrows. 

## The sketches 
### 0. Conways Game of Life
The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent.
![Conways game of life](https://i.imgur.com/9HtymUw.png)
### 1. Particle System
Inspired by chapter 4 of the book "Nature of Code" I generated multiple particles, that float randomly on a 2D plane. Whenever each particle detects surrounding particles up to a certain distance, connecting lines will be drawn. Hence a star-like scenery is created. With tensorflow.js there are multiple possibilities to detect body movement without a depending hardware such as Microsoft's kinect. Hence I was curious to try out this new feature and used the handtracking.js library which is based on tensorflow. My goal is to create a fun particle animation where one can interact either with the hand movement or even a full body detection.
### 2. Voronoi
During my research of beautiful generative arts patterns I was fascinated by the voronoi pattern, that delivers a cell-like structure. Therefore I sketched a jiggling animation with it via P5 and a voronoi library.
### 3. Collatz Conjecture
The Collatz conjecture is a conjecture in mathematics that concerns a sequence defined as follows: start with any positive integer n. Then each term is obtained from the previous term as follows: If the previous term is even, the next term is one half the previous term. If the previous term is odd, the next term is 3 times the previous term plus 1. The conjecture is that no matter what value of n, the sequence will always reach 1. Based on this conjecture I used the inverted sequence and tried to visualize it. The green branches represent the even followers, the golden ones represent the odd followers. 
### 4. Wave clock
The real kick was Matt Pearson's tutorial of the wave clock in his book ["Generative Art"](https://www.amazon.de/Generative-Art-Practical-Guide-Processing/dp/1935182625). Using noise and spiralling movements inspired me to create sketches that follow similar patterns. 

### 5. Spiral rose
The "Spiral rose" is one example of my inspirations after the wave clock. I played around with wavy motion via sine and cosine functions until I stumbled across this sketch. 

### 6. L-Systems
L-Systems are a typical pattern in every book or introduction once you read handbooks and starting tutorials about generative art. L stands for Lindenmayer, the one who created these patterns. The sketch is based on a recursive string generated function. In my sketch you can grow the "tree" by clicking on the canvas. 

### 7. Spinning Sculpture
I also wanted to dive into 3-dimensional sketches. Therefore I wanted to simulate the way how to mold clay in a pottery, namely by using rotation, and with lines instead of clay. This sketch was very satisfying. In my collection you can see a varriety of spinning sculptures (there's also one with sound, so turn on the volume!). I also liked to create a sort of Tron-Like-Style. 

### 8. Phyllotaxis
In botany, phyllotaxis or phyllotaxy is the arrangement of leaves on a plant stem. E.g. There is also the so called phyllotaxis algorithm that arranges objects in this spiral pattern in a way similar to sunflower seeds. Making use of algorithmic botany has always been a dream, ever since I studied math. And even though this sketch might not be as spectacular as other sketches, this has fulfilled one of my childhood dreams. 

### 9. Square
During this class I wanted to play around with shapes in perspective. Here I started of with sketching a cube in a normal side perspective and experimented with rotation until I was creating an unfolding effect. 

### 10. Tiled lines
Tim Holman's [Generative Artistry website](https://generativeartistry.com/) is great if you want to start with classic patterns. They are so simple and yet beautiful that I had to translate one of his sketches in P5. I highly recommed his generative art speedrun talk, which is available [here](https://www.youtube.com/watch?v=4Se0_w0ISYk). 

### 11. Typemorphing
Typemorphing is something I stumbled across during work. There are pretty good ways to vectorize types and play with the shape. 

## Background
During my last semester I was fulfilling a dream for me: Visualizing aesthetic patterns via code. 

## Recommended links
I would not be able to do all these sketches without the help of [pixelkind](https://github.com/pixelkind) and so many free tutorials, inspirations and great books. If you are also interested in this topic, here are some good places to start off:

### Coding tutorials
- [P5.js](https://p5js.org/)
- [The Coding Train](https://www.youtube.com/user/shiffman)
- [Nature of Code by Daniel Shiffman](https://natureofcode.com/)
- [Generative Artistry by Tim Holman](https://generativeartistry.com/)
- [(as well as his funny speedrun video)](https://www.youtube.com/watch?v=4Se0_w0ISYk)
- [Generative Gestaltung](http://www.generative-gestaltung.de/2/)

### Visual insights
- [Programming Design Systems (lecture by Rune Madsen)](http://printingcode.runemadsen.com/)
- [Purin Pharinchant's P5 experiments](http://purin.co/Experiments-with-P5-js)
- [Vera Molnar](http://www.veramolnar.com/)
- [Georg Nees](http://dada.compart-bremen.de/item/agent/15)
- [Verostko](http://www.verostko.com/)
- [So LeWitt](http://www.artnet.de/k%C3%BCnstler/sol-lewitt/)
- [ZKM in Karlsruhe](https://zkm.de/de)
- [Dam Gallery in Berlin](https://dam-gallery.de/)

