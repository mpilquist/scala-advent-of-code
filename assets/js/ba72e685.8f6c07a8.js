"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[771],{9619:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(7462),i=(a(7294),a(3905)),o=a(6340);const l={},r="Day 1: Sonar Sweep",s={unversionedId:"puzzles/day1",id:"puzzles/day1",title:"Day 1: Sonar Sweep",description:"by @adpi2",source:"@site/target/mdoc/puzzles/day1.md",sourceDirName:"puzzles",slug:"/puzzles/day1",permalink:"/scala-advent-of-code/puzzles/day1",draft:!1,editUrl:"https://github.com/scalacenter/scala-advent-of-code/edit/website/docs/puzzles/day1.md",tags:[],version:"current",frontMatter:{},sidebar:"adventOfCodeSidebar",previous:{title:"Day 22: Monkey Map",permalink:"/scala-advent-of-code/2022/puzzles/day22"},next:{title:"Day 2: Dive!",permalink:"/scala-advent-of-code/puzzles/day2"}},p={},d=[{value:"Puzzle description",id:"puzzle-description",level:2},{value:"Solution of Part 1",id:"solution-of-part-1",level:2},{value:"Solution of Part 2",id:"solution-of-part-2",level:2},{value:"Generalization to <code>sliding</code> method",id:"generalization-to-sliding-method",level:2},{value:"Final solution",id:"final-solution",level:2},{value:"Run it locally",id:"run-it-locally",level:3},{value:"Run it in the browser",id:"run-it-in-the-browser",level:3},{value:"Part 1",id:"part-1",level:4},{value:"Part 2",id:"part-2",level:4},{value:"Bonus",id:"bonus",level:2},{value:"Solutions from the community",id:"solutions-from-the-community",level:2}],u={toc:d};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"day-1-sonar-sweep"},"Day 1: Sonar Sweep"),(0,i.kt)("p",null,"by ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/adrienpi2"},"@adpi2")),(0,i.kt)("h2",{id:"puzzle-description"},"Puzzle description"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://adventofcode.com/2021/day/1"},"https://adventofcode.com/2021/day/1")),(0,i.kt)("h2",{id:"solution-of-part-1"},"Solution of Part 1"),(0,i.kt)("p",null,"The first step is to transform the input to a sequence of integers.\nWe can do so with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val depths: Seq[Int] = input.linesIterator.map(_.toInt).toSeq\n")),(0,i.kt)("p",null,"The second step and hardest challenge of this puzzle is to compute all pairs of consecutive depth measurments."),(0,i.kt)("p",null,"For each index ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," from 0 until ",(0,i.kt)("inlineCode",{parentName:"p"},"depths.size - 1")," we can create a pair of the depths at index ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"i + 1"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val pairs: Seq[(Int, Int)] =\n  for i <- 0 until depths.size - 1\n  yield (depths(i), depths(i + 1))\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 until n")," is an exclusive range, it does not contain the upper bound ",(0,i.kt)("inlineCode",{parentName:"li"},"n"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 to n")," is an inclusive range, it contains the upper bound ",(0,i.kt)("inlineCode",{parentName:"li"},"n"),"."))),(0,i.kt)("p",null,"For the input ",(0,i.kt)("inlineCode",{parentName:"p"},"Seq(10, 20, 30, 40)"),", pairs is ",(0,i.kt)("inlineCode",{parentName:"p"},"Seq((10,20), (20, 30), (30, 40))"),"."),(0,i.kt)("p",null,"Then we can count the pairs whose first element is smaller than its second element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"pairs.count((first, second) => first < second)\n")),(0,i.kt)("p",null,"That gives us:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def part1(input: String): Int =\n  val depths: Seq[Int] = input.linesIterator.map(_.toInt).toSeq\n  val pairs: Seq[(Int, Int)] =\n    for i <- 0 until depths.size - 1\n    yield (depths(i), depths(i + 1))\n  pairs.count((first, second) => first < second)\n")),(0,i.kt)("h2",{id:"solution-of-part-2"},"Solution of Part 2"),(0,i.kt)("p",null,"In the second part we need to compute the sums of all consecutive three elements."),(0,i.kt)("p",null,"We can use a similar approach to part 1."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val sums: Seq[Int] =\n  for i <- 0 until depths.size - 2\n  yield depths(i) + depths(i + 1) + depths(i + 2)\n")),(0,i.kt)("p",null,"Notice that we can sum the three elements in the ",(0,i.kt)("inlineCode",{parentName:"p"},"yield")," part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," comprehension."),(0,i.kt)("p",null,"The remaining code of this second puzzle is very similar to what we did in part 1."),(0,i.kt)("h2",{id:"generalization-to-sliding-method"},"Generalization to ",(0,i.kt)("inlineCode",{parentName:"h2"},"sliding")," method"),(0,i.kt)("p",null,"In part 1 we computed all pairs of consecutive elements.\nIn part 2 we computed the sums of all consecutive three elements."),(0,i.kt)("p",null,"In each case there is a notion of sliding window of size n, where n is 2 or 3.\nFor example, the sliding window of size 3 of ",(0,i.kt)("inlineCode",{parentName:"p"},"Seq(10, 20, 30, 40, 50)")," is:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Seq(Seq(10, 20, 30), Seq(20, 30, 40), Seq(30, 40, 50))"),"."),(0,i.kt)("p",null,"We can generalize this procedure in a method that compute a sliding window of some size n on any sequence of elements.\nSuch a method already exists in the Scala standard library under the name ",(0,i.kt)("inlineCode",{parentName:"p"},"sliding"),". It returns an iterator of arrays."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ Seq(10, 20, 30, 40, 50).sliding(3).toSeq\nSeq(Array(10, 20, 30), Array(20, 30, 40), Array(30, 40, 50))\n")),(0,i.kt)("p",null,"We can use the sliding method to make our code shorter and faster."),(0,i.kt)("h2",{id:"final-solution"},"Final solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def part1(input: String): Int =\n  val depths = input.linesIterator.map(_.toInt)\n  val pairs = depths.sliding(2).map(arr => (arr(0), arr(1)))\n  pairs.count((prev, next) => prev < next)\n\ndef part2(input: String): Int =\n  val depths = input.linesIterator.map(_.toInt)\n  val sums = depths.sliding(3).map(_.sum)\n  val pairs = sums.sliding(2).map(arr => (arr(0), arr(1)))\n  pairs.count((prev, next) => prev < next)\n")),(0,i.kt)("h3",{id:"run-it-locally"},"Run it locally"),(0,i.kt)("p",null,"You can get this solution locally by cloning the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalacenter/scala-advent-of-code"},"scalacenter/scala-advent-of-code")," repository."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git clone https://github.com/scalacenter/scala-advent-of-code\n$ cd scala-advent-of-code\n")),(0,i.kt)("p",null,"The you can run it with scala-cli:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ scala-cli 2021 -M day1.part1\nThe answer is 1559\n\n$ scala-cli 2021 -M template1.part2\nThe answer is 1600\n")),(0,i.kt)("p",null,"You can replace the content of the ",(0,i.kt)("inlineCode",{parentName:"p"},"input/day1")," file with your own input from ",(0,i.kt)("a",{parentName:"p",href:"https://adventofcode.com/2021/day/1"},"adventofcode.com")," to get your own solution."),(0,i.kt)("h3",{id:"run-it-in-the-browser"},"Run it in the browser"),(0,i.kt)("h4",{id:"part-1"},"Part 1"),(0,i.kt)(o.Z,{puzzle:"day1-part1",year:"2021",mdxType:"Solver"}),(0,i.kt)("h4",{id:"part-2"},"Part 2"),(0,i.kt)(o.Z,{puzzle:"day1-part2",year:"2021",mdxType:"Solver"}),(0,i.kt)("h2",{id:"bonus"},"Bonus"),(0,i.kt)("p",null,"There is a trick to make the solution of part 2 even smaller."),(0,i.kt)("p",null,"Indeed comparing ",(0,i.kt)("inlineCode",{parentName:"p"},"depths(i) + depths(i + 1) + depths(i + 2)")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"depths(i + 1) + depths(i + 2) + depths(i + 3)")," is the same as comparing ",(0,i.kt)("inlineCode",{parentName:"p"},"depths(i)")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"depths(i + 3)"),".\nSo the second part of the puzzle is almost the same as the first part of the puzzle."),(0,i.kt)("h2",{id:"solutions-from-the-community"},"Solutions from the community"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik/advent-of-code/blob/main/day1/main.scala"},"Solution")," of @tgodzik."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/otobrglez/aoc2021/blob/master/src/main/scala/com/pinkstack/aoc/day01/Sonar.scala"},"Solution")," of ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/otobrglez"},"@otobrglez"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/s5bug/aoc/blob/main/src/main/scala/tf/bug/aoc/y2021/Day01.scala"},"Solution")," of @s5bug using ",(0,i.kt)("a",{parentName:"li",href:"https://index.scala-lang.org/typelevel/cats-effect/cats-effect/3.3.0?target=_3.x"},"cats-effect")," and ",(0,i.kt)("a",{parentName:"li",href:"https://index.scala-lang.org/typelevel/fs2/fs2-core/3.2.1?target=_3.x"},"fs2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/keynmol/advent-of-code/blob/main/2021/day1.scala"},"Solution")," of @keynmol using C APIs on ",(0,i.kt)("a",{parentName:"li",href:"https://scala-native.readthedocs.io/en/latest/index.html"},"Scala Native")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/erdnaxeli/adventofcode/blob/master/2021/src/main/scala/Day1.scala"},"Solution")," of @erdnaxeli."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tOverney/AdventOfCode2021/blob/main/src/main/scala/ch/overney/aoc/day1/"},"Solution")," of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tOverney"},"@tOverney"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/rpiotrow/advent-of-code-2021/tree/main/src/main/scala/io/github/rpiotrow/advent2021/day01"},"Solution")," of ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/r_piotrow"},"@rpiotrow")," using ",(0,i.kt)("a",{parentName:"li",href:"https://zio.dev"},"ZIO")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/philipschwarz/advent-of-code-2021-scala/blob/master/src/main/scala/day1"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/philip_schwarz"},"@philip_schwarz")," with and without Cats"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/FlorianCassayre/AdventOfCode-2021/blob/master/src/main/scala/adventofcode/solutions/Day01.scala"},"Solution")," of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/FlorianCassayre"},"@FlorianCassayre"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/justinhj/adventofcode2021-day1"},"Solution")," with ",(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ziWwsXD9w7M"},"video tutorial")," by ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/justinhj"},"@justinhj")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Jannyboy11/AdventOfCode2021/blob/main/src/main/scala/day01/Day01.scala"},"Solution")," of ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/JanBoerman95"},"Jan Boerman"),".")),(0,i.kt)("p",null,"Share your solution to the Scala community by editing this page. (You can even write the whole article!)"))}c.isMDXComponent=!0}}]);