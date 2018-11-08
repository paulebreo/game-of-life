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
            this.Count++;
        }

    }
}
