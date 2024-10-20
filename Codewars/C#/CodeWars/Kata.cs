namespace CodeWars
{
    internal class Kata
    {
        static void Main(string[] args)
        {
            //Console.WriteLine(GetAge("3 years old"));
            Console.WriteLine(HoopCount(11));
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
    }
}
