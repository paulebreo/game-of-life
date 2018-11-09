using System;
using System.Collections.Generic;

namespace ExploreCalifornia.Services
{
    public interface IGameOfLifeService
    {
        void Increment();
        int GetCount();
    }
}
