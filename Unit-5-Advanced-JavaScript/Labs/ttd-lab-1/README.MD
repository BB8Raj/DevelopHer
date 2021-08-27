Intro: Pig Latin i s a children’s word game i n English where starting consonants are flipped to
the ends of words and -ay added to each word. Hello World would be ellohay orldway i n Pig
Latin, for i nstance. Many l anguages have games similar to this--read more at
http://mentalfloss.com/article/50242/pig-latins-11-other-languages
Task: Use TDD practices to build a function that translates from English to Pig Latin.
Build Specifications

1. Translation must all be done i n a t ranslate function that takes a string parameter and
   returns the translated Pig Latin string.
2. The translation functionality must be developed with TDD using tests on the t ranslate
   function.
3. If desired, you may also create other helper functions and optionally test them.
   Additional Build Specifications
4. Convert each word to l owercase before translating.
5. If a word starts with a vowel, j ust add “way” onto the ending.
6. If a word starts with a consonant, move all of the consonants that appear before the
   first vowel to the end of the word, then add “ay” to the end of the word.
   Hints
   ● Treat “y” as a consonant.
   ● Start with the simplest cases and work up, for example…
   a. words that start with vowels… write tests for several different starting vowels
   b. words that start with vowels with capital l etters are converted to l owercase
   c. words that start with one consonant… write tests for the second l etter being
   several different vowels
   d. words that start with two consonants
   e. words that start with more consonants
   Grand Circus Detroit
   Extended Challenges
   ● Keep the case of the word, whether i ts uppercase (WORD), title case (Word), or
   lowercase (word).
   ● Allow punctuation i n the i nput string.
   ● Translate words with contractions. Ex: can't become an'tcay
   ● Don’t translate words that have numbers or symbols. Ex: 189 should be l eft as 189 and
   hello@grandcircus.co should be l eft as hello@grandcircus.co.
   ● Check that the user has actually entered text before translating.
   ● Make the function take a phrase or sentence i nstead of a single word, and then find the
   Pig Latin for each word i n the l ine.
   ● In a separate J S file, use the p rompt-sync NPM package to prompt the user for a word
   or phrase. Call your function to translate i t, then l og the result.
   Test Cases
   Start with these sample test cases, then you must create more of your own (see Grading
   Criteria)
   ● Words starting with different vowels
   ○ translate("apple") → "applyway"
   ○ translate("else") → "elseway"
   ● Words starting with one consonant
   ○ translate("giraffe") → "iraffegay"
   Remember: Never delete your old tests. Keep adding more and more.
   Grading Criteria
7. At l east five (5) tests for words starting with different vowels.
   a. These tests are correct and pass.
8. At l east two (2) tests for words starting with one consonant.
   a. These tests are correct and pass.
9. At l east one (1) test for words starting with two consonants.
   a. These tests are correct and pass.
10. At l east one (1) test for words starting with three consonants.
    a. These tests are correct and pass.
11. At l east one (1) test checking for l ower case conversion.
    a. These tests are correct and pass.
