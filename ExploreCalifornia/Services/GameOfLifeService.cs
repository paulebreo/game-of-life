using System;
namespace ExploreCalifornia.Services
{
    public class GameOfLifeService : IGameOfLifeService
    {
        public int Count { get; set; }

        public GameOfLifeService(int Count)
        {
            this.Count = Count;
        }
        public void Increment()
        {
            this.Count++;
            Console.WriteLine("increment {0}", Count);
        }
    }
}
