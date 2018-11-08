using System;
namespace ExploreCalifornia.Models
{
    public class GameOfLife
    {
        public int Count { get; set; }

        public GameOfLife()
        {
            this.Count = 0;
        }
        public void Increment() {
            this.Count = this.Count + 2;
            Console.WriteLine("increment {0}", this.Count);
        }

    }
}
