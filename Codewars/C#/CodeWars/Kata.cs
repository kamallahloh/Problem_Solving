using System.Diagnostics.Metrics;
using System;
using System.Collections.Generic;
using System.Text;
using System.Collections;

namespace CodeWars
{
    internal class Kata
    {
        static void Main(string[] args)
        {
            //Console.WriteLine(GetAge("3 years old"));
            //Console.WriteLine(HoopCount(11));

            //var haystack_1 = new object[] { '3', "123124234", null, "needle", "world", "hay", 2, '3', true, false };
            //var haystack_2 = new object[] { "283497238987234", "a dog", "a cat", "some random junk", "a piece of hay", "needle", "something somebody lost a while ago" };
            //var haystack_3 = new object[] { 1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, "needle", 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54 };

            //Console.WriteLine(FindNeedle(haystack_1));
            //Console.WriteLine(FindNeedle(haystack_2));
            //Console.WriteLine(FindNeedle(haystack_3));

            //Console.WriteLine(RemoveExclamationMarks("!?!"));

            //Console.WriteLine(CockroachSpeed(1.08));
            //Console.WriteLine(Decode(".... . -.--   .--- ..- -.. ."));
            //Console.WriteLine(Decode("... --- ...   .--. .-.. . .- ... ."));

            //Console.WriteLine(RomanConvert(1234));

            //Console.WriteLine(BreakCamelCase("camelCasingAllTheWayBreakTheCode"));

            //Console.WriteLine(ToWeirdCase("Weird Casing All The Way Break The Code"));

            //Console.WriteLine("00:59:59 ==>", GetReadableTime(3599));
            //Console.WriteLine("23:59:59 ==>" + GetReadableTime(86399));
            //Console.WriteLine("24:00:00 ==>" + GetReadableTime(86400));
            Console.WriteLine(ParseInt("two hundred forty-six")); // 246
            Console.WriteLine(ParseInt("two hundred forty-six thousand")); // 246000
            Console.WriteLine(ParseInt("seven hundred eighty-three thousand nine hundred and nineteen")); // 783919
        }



        public static int ParseInt(string s)
        {
            var numbersDictionary = new Dictionary<string, int>
            {
                { "zero", 0 },
                { "one", 1 },
                { "two", 2 },
                { "three", 3 },
                { "four", 4 },
                { "five", 5 },
                { "six", 6 },
                { "seven", 7 },
                { "eight", 8 },
                { "nine", 9 },
                { "ten", 10 },
                { "eleven", 11 },
                { "twelve", 12 },
                { "thirteen", 13 },
                { "fourteen", 14 },
                { "fifteen", 15 },
                { "sixteen", 16 },
                { "seventeen", 17 },
                { "eighteen", 18 },
                { "nineteen", 19 },
                { "twenty", 20 },
                { "thirty", 30 },
                { "forty", 40 },
                { "fifty", 50 },
                { "sixty", 60 },
                { "seventy", 70 },
                { "eighty", 80 },
                { "ninety", 90 },
                { "hundred", 100 },
                { "thousand", 1000 },
                { "million", 1000000 },
            };

            var words = s.Replace(" and ", " ").Replace("-", " ").Split(' ');
            int result = 0;
            int current = 0;

            foreach (var word in words)
            {
                if (numbersDictionary.ContainsKey(word))
                {
                    int number = numbersDictionary[word];
                    if (number == 100 || number == 1000 || number == 1000000)
                    {
                        current *= number;
                    }
                    else
                    {
                        current += number;
                    }

                    if (number == 1000 || number == 1000000)
                    {
                        result += current;
                        current = 0;
                    }
                }
            }

            result += current;
            return result;
        }

        //public static string GetReadableTime(int time) =>
        //    $"{(int)TimeSpan.FromSeconds(time).TotalHours:D2}:{TimeSpan.FromSeconds(time):mm\\:ss}";

        //return string.Format("{0:d2}:{1:d2}:{2:d2}", seconds / 3600, seconds / 60 % 60, seconds % 60);


        /*        public static string ToWeirdCase(string s)
                {
                    var result = new StringBuilder();
                    var odd = true;

                    for (int i = 0; i < s.Length; i++)
                    {
                        var letter = s[i];

                        if (letter == ' ')
                        {
                            result.Append(' ');
                            odd = true;
                            continue;
                        }
                        else
                        {
                            if (odd)
                            {
                                result.Append(char.ToUpper(letter));
                                odd = false;
                            }
                            else
                            {
                                result.Append(char.ToLower(letter));
                                odd = true;
                            }
                        }
                    }

                    return result.ToString();
                }
        */
        /*
           public static string ToWeirdCase(string s)
          {
            return string.Join(" ", 
              s.Split(' ')
              .Select(w => string.Concat(
                w.Select((ch, i) => i % 2 == 0 ? char.ToUpper(ch) : char.ToLower(ch)
              ))));
          }
        */

        /*
             public static string ToWeirdCase(string s) => string.Join(" ", s.Split(' ').Select(x => WordToWierdCase(x)));

            private static string WordToWierdCase(string s) => new string(s.ToCharArray()
                    .Select((ch, i) => i % 2 == 0 ? char.ToUpper(ch) : char.ToLower(ch))
                    .ToArray());
        */



        /*        public static string ToWeirdCase(string s)
                {
                    var result = new StringBuilder();

                    foreach (string word in s.Split(' '))
                    {
                        var letters = word.Split(' ');

                        for (int i = 0; i < letters.Length; i++)
                        {
                            var letter = letters[i];
                            if (i % 2 == 0)
                            {
                                result.Append(letter.ToUpper());
                            }
                            else
                            {
                                result.Append(letter.ToLower());
                            };
                        }
                        result.Append(' ');
                    }

                    return result.ToString().Trim();
                }*/


        ////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /*
                public static string BreakCamelCase(string str)
                {
                    var result = new StringBuilder();
                    var checkedIndex = 0;

                    for (int i = 0; i < str.Length; i++)
                    {
                        if (char.IsUpper(str[i]))
                        {
                            result.Append(str.Substring(checkedIndex, i - checkedIndex) + " ");
                            checkedIndex = i;
                        }
                    }

                    result.Append(str.Substring(checkedIndex));
                    return result.ToString();
                }
        */

        /*
         public class Kata
        {
          public static string BreakCamelCase(string str) =>
            new Regex("([A-Z])").Replace(str, " $1");
        }
         */

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/csharp
        // Roman Numerals Encoder

        //        public static string DigitToChars(int number, string one, string five, string ten)
        //        {
        //            if (number == 1) { return one; };
        //            if (number == 2) { return one + one; };
        //            if (number == 3) { return one + one + one; };
        //            if (number == 4) { return one + five; };
        //            if (number == 5) { return five; };
        //            if (number == 6) { return five + one; };
        //            if (number == 7) { return five + one + one; };
        //            if (number == 8) { return five + one + one + one; };
        //            if (number == 9) { return one + ten; };
        //            return "";
        //        }



        //        public static string RomanConvert(int n)
        //        {
        //            /* 
        //            Symbol    Value
        //I          1
        //V          5
        //X          10
        //L          50
        //C          100
        //D          500
        //M          1,000
        //             */

        //            StringBuilder result = new StringBuilder();

        //            var thousands = 0;
        //            var hunderds = 0;
        //            var tens = 0;
        //            var ones = 0;



        //            if (n >= 1000)
        //            {
        //                thousands = Convert.ToInt32(Math.Floor(n / 1000f));
        //                hunderds = Convert.ToInt32(Math.Floor(n / 100f) - (Math.Floor(n / 1000f) * 10));
        //                tens = Convert.ToInt32(Math.Floor(n / 10f) - (Math.Floor(n / 100f) * 10));
        //                ones = Convert.ToInt32(Math.Floor(n / 1f) - (Math.Floor(n / 10f) * 10));
        //            }
        //            else if (n >= 100)
        //            {
        //                hunderds = Convert.ToInt32(Math.Floor(n / 100f));
        //                tens = Convert.ToInt32(Math.Floor(n / 10f) - (Math.Floor(n / 100f) * 10));
        //                ones = Convert.ToInt32(Math.Floor(n / 1f) - (Math.Floor(n / 10f) * 10));
        //            }
        //            else if (n >= 10)
        //            {
        //                tens = Convert.ToInt32(Math.Floor(n / 10f));
        //                ones = Convert.ToInt32(Math.Floor(n / 1f) - (Math.Floor(n / 10f) * 10));
        //            }
        //            else if (n >= 1)
        //            {
        //                ones = n;
        //            };

        //            result.Append(DigitToChars(thousands, "M", "", ""));
        //            result.Append(DigitToChars(hunderds, "C", "D", "M"));
        //            result.Append(DigitToChars(tens, "X", "L", "C"));
        //            result.Append(DigitToChars(ones, "I", "V", "X"));

        //            return result.ToString();
        //        }


        /*
         using System;

        public class RomanConvert
        {
            public static string Solution(int n)
            {
          string roman = "";
          string[] thousand = {"","M","MM","MMM"};
          string[] hundred = {"","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"};
          string[] ten = {"","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"};
          string[] one = {"","I","II","III","IV","V","VI","VII","VIII","IX"};

          roman += thousand[(n/1000)%10];
          roman += hundred[(n/100)%10];
          roman += ten[(n/10)%10];
          roman += one[n%10];

          return roman;

            }
        }

         */

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /*        public static string Decode(string morseCode)
                {
                    Dictionary<String, String> morse = new Dictionary<String, String>()
                    {
                        {".-"   ,"A"},
                        {"-..." ,"B"},
                        {"-.-." ,"C"},
                        {"-.."  ,"D"},
                        {"."    ,"E"},
                        {"..-." ,"F"},
                        {"--."  ,"G"},
                        {"...." ,"H"},
                        {".."   ,"I"},
                        {".---" ,"J"},
                        {"-.-"  ,"K"},
                        {".-.." ,"L"},
                        {"--"   ,"M"},
                        {"-."   ,"N"},
                        {"---"  ,"O"},
                        {".--." ,"P"},
                        {"--.-" ,"Q"},
                        {".-."  ,"R"},
                        {"..."  ,"S"},
                        {"-"    ,"T"},
                        {"..-"  ,"U"},
                        {"...-" ,"V"},
                        {".--"  ,"W"},
                        {"-..-" ,"X"},
                        {"-.--" ,"Y"},
                        {"--.." ,"Z"},
                        {"-----","0"},
                        {".----","1"},
                        {"..---","2"},
                        {"...--","3"},
                        {"....-","4"},
                        {".....","5"},
                        {"-....","6"},
                        {"--...","7"},
                        {"---..","8"},
                        {"----.","9"},
                        {"...---...","SOS"},
                        {"-.-.--","!"},
                        {".-.-.-","."},
                    };

                    List<string> decodedWords = new List<string>();
                    // var decodedWords = new string[4] { "1", "2", "1", "2", "2" };
                    // IEnumerable Interface

                    var words = morseCode.Trim().Split("   ");
                    foreach (var word in words)
                    {
                        var letters = word.Split(" ");

                        for (var i = 0; i < letters.Length; i++)
                        {
                            letters[i] = morse[letters[i]];
                        }
                        decodedWords.Add(String.Join("", letters));
                    }
                    return String.Join(" ", decodedWords);
                }
        */

        //        using System;
        //using System.Linq;

        //class MorseCodeDecoder
        //    {
        //        public static string Decode(string morseCode)
        //        {
        //            var chars = morseCode
        //              .Trim()
        //              .Replace("   ", " W ")
        //              .Split(' ')
        //              .Select(w => w == "W" ? " " : MorseCode.Get(w));
        //            return string.Join("", chars);
        //        }
        //    }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // https://www.codewars.com/kata/515e271a311df0350d00000f/csharp
        // Square(n) Sum
        public static int SquareSum(int[] numbers)
        {
            int sum = 0;
            foreach (var n in numbers)
            {
                sum += n * n;
            }
            return sum;
        }
        //public static int SquareSum(int[] n) => n.Sum(i => i * i);
        //public static int SquareSum(int[] numbers) => numbers.Aggregate(0, (agg, n) => agg += n * n); reduce

        // https://www.codewars.com/kata/568d0dd208ee69389d000016/csharp
        // Transportation on vacation
        //public static int RentalCarCost(int d) => d < 3 ? d * 40 : d < 7 ? d * 40 - 20 : d * 40 - 50;
        public static int RentalCarCost(int d) => d * 40 - (d < 3 ? 0 : d < 7 ? 20 : 50);

        // https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/csharp
        // Beginner Series #4 Cockroach
        public static int CockroachSpeed(double x) => (int)Math.Floor(x * 100000 / 60 / 60);

        public static string Bmi(double weight, double height)
        {
            // https://www.codewars.com/kata/57a429e253ba3381850000fb/train/csharp
            // Calculate BMI
            var x = (weight / (height * height));
            return x > 30 ? "Obese" : x > 25 ? "Overweight" : x > 18.5 ? "Normal" : "Underweight";
        }

        // public static string Bmi(double w, double h) => (w = w / h / h) > 30 ? "Obese" : w > 25 ? "Overweight" : w > 18.5 ? "Normal" : "Underweight";

        // https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/csharp
        // Remove exclamation marks
        public static string RemoveExclamationMarks(string s) => s.Replace("!", "");

        public static int GetAge(string inputString)
        {
            // return correct age (int). Happy coding :)
            // https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1
            // Parse nice int from char problem

            int.TryParse(inputString[0].ToString(), out var number);
            return number;
        }

        public static string HoopCount(int n)
        {
            // https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/csharp
            // Keep up the hoop

            return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
        }

        public static string FindNeedle(object[] haystack)
        {
            // https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/csharp
            // A Needle in the Haystack
            var x = Array.IndexOf(haystack, "needle");
            return "found the needle at position " + x;
        }

    }
}
