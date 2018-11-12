using System;
using System.Threading.Tasks;

namespace TheGameOfLife.Services
{
    public interface ILifeSimulationService
    {
        void SetDimensions(int Heigth, int Width);
        void Grow();
        void ClearField();
        Task UpdateField(bool [,] NewCells);
        bool[,] GetState();

    }
}
