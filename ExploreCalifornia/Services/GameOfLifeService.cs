using System;
namespace TheGameOfLife.Services
{
    public class GameOfLifeService : IGameOfLifeService
    {
        private  int _count = 0;

        public void Increment()
        {
            _count++;
            Console.WriteLine("increment {0}", _count);
        }
        public int GetCount() {
            return _count;
        }
    }
}
