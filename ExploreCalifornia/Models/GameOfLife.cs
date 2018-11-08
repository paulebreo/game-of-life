using System;
namespace ExploreCalifornia.Models
{
    public class GameOfLife
    {
        public static int Count { get; set; }

        public GameOfLife()
        {
            Count = 0;
        }
        public static void Increment() {
            Count = Count + 2;
            Console.WriteLine("increment {0}", Count);
        }

    }
}
