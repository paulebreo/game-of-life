using System;
namespace TheGameOfLife.Models
{
    public class GameOfLife
    {
        public  int Count { get; set; }

        public GameOfLife(int Count)
        {
            this.Count = Count;
        }
        public  void Increment() {
            this.Count++;
            Console.WriteLine("increment {0}", Count);
        }

    }
}
