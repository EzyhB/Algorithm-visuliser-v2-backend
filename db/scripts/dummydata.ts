type dataFormat = {
  blog_author: string;
  blog_title: string;
  blog_content: string;
  blog_date: string;
}[];

const data: dataFormat = [
  {
    blog_date: "2022-02-20",
    blog_author: "Ezyh B",
    blog_title: "Whys this website so damn cool?",
    blog_content:
      "After contemplating this question for a long period of time, together with a team of a multitude of scientists (super smart people... meaning everything in this blog post is 100% credible and accurate), we have come to the conclusion that its simply the fact that... it has cool buttons and stuff. seems legit right? ",
  },
  {
    blog_date: "2022-02-20",
    blog_author: "Ezyh B",
    blog_title: "Why learn about Binary Search?",
    blog_content:
      "It can be used to find an element in a sorted array in O(logN) time where N is the number of elements in the sorted array. We can perform binary search on the range [0,n]. At each step of the algorithm, we have the size of the remaining range or we already finish.",
  },
  {
    blog_date: "2022-02-20",
    blog_author: "Ezyh B",
    blog_title: "What are Sorting Algorithms?",
    blog_content:
      "Sorting algorithms are ways to organize an array of items from smallest to largest. These algorithms can be used to organize messy data and make it easier to use. Furthermore, having an understanding of these algorithms and how they work is fundamental for a strong understanding of Computer Science which is becoming more and more critical in a world of premade packages.",
  },
  {
    blog_date: "2022-02-20",
    blog_author: "Ezyh B",
    blog_title: "Difference between Searching and Sorting Algorithm",
    blog_content:
      "Searching Algorithms are designed to retrieve an element from any data structure where it is used. A Sorting Algorithm is used to arranging the data of list or array into some specific order.",
  },
  {
    blog_date: "2022-02-20",
    blog_author: "Ezyh B",
    blog_title: "The story of this website",
    blog_content:
      "Before my 1st line of code (exctly 1 week and 1 day ago from today) i was like... 'cool, i have a project idea, now what' so i stared at my screen for like half a day, then started walking around my room thinking of how to start. I kinda just told myself lets make 1 component (stay tuned for part 2)",
  },
  {
    blog_date: "2022-02-20",
    blog_author: "Ezyh B",
    blog_title: "Part 2 of Story of this website",
    blog_content:
      "So after making my 1st component (navbar) I was like hmm... 'seems easy, lets just do that again like 100 times' so yeh thats kinda what I did. I walk around my room looking at the floor and ideas come of how to impliment my designs and after 2 Saturdays and 2 Sundays (its a weekend project) i have a pretty good front end ready. now im generating this random Blog content so I can move on to making a backend :D",
  },
];

export default data;
