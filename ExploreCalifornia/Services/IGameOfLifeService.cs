using System;
using System.Collections.Generic;

namespace TheGameOfLife.Services
{
    public interface IGameOfLifeService
    {
        void Increment();
        int GetCount();
    }
}
