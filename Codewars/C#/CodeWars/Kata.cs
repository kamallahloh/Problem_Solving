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


        }

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
