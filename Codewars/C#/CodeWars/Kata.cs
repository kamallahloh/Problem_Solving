using System.Diagnostics.Metrics;
using System;
using System.Collections.Generic;
using System.Text;

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

            Console.WriteLine(RomanConvert(1234));
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/csharp
        // Roman Numerals Encoder

        public static string DigitToChars(int number, string one, string five, string ten)
        {
            if (number == 1) { return one; };
            if (number == 2) { return one + one; };
            if (number == 3) { return one + one + one; };
            if (number == 4) { return one + five; };
            if (number == 5) { return five; };
            if (number == 6) { return five + one; };
            if (number == 7) { return five + one + one; };
            if (number == 8) { return five + one + one + one; };
            if (number == 9) { return one + ten; };
            return "";
        }



        public static string RomanConvert(int n)
        {
            /* 
            Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
             */

            StringBuilder result = new StringBuilder();

            var thousands = 0;
            var hunderds = 0;
            var tens = 0;
            var ones = 0;



            if (n >= 1000)
            {
                thousands = Convert.ToInt32(Math.Floor(n / 1000f));
                hunderds = Convert.ToInt32(Math.Floor(n / 100f) - (Math.Floor(n / 1000f) * 10));
                tens = Convert.ToInt32(Math.Floor(n / 10f) - (Math.Floor(n / 100f) * 10));
                ones = Convert.ToInt32(Math.Floor(n / 1f) - (Math.Floor(n / 10f) * 10));
            }
            else if (n >= 100)
            {
                hunderds = Convert.ToInt32(Math.Floor(n / 100f));
                tens = Convert.ToInt32(Math.Floor(n / 10f) - (Math.Floor(n / 100f) * 10));
                ones = Convert.ToInt32(Math.Floor(n / 1f) - (Math.Floor(n / 10f) * 10));
            }
            else if (n >= 10)
            {
                tens = Convert.ToInt32(Math.Floor(n / 10f));
                ones = Convert.ToInt32(Math.Floor(n / 1f) - (Math.Floor(n / 10f) * 10));
            }
            else if (n >= 1)
            {
                ones = n;
            };

            result.Append(DigitToChars(thousands, "M", "", ""));
            result.Append(DigitToChars(hunderds, "C", "D", "M"));
            result.Append(DigitToChars(tens, "X", "L", "C"));
            result.Append(DigitToChars(ones, "I", "V", "X"));

            return result.ToString();
        }


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
