using System;
namespace ExploreCalifornia.Services
{
    public interface ILifeSimulationService
    {
        void SetDimensions(int Heigth, int Width);
        void Grow();
        void ClearField();
        bool[,] GetState();

    }
}
