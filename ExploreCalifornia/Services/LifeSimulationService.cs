using System;
using System.Threading.Tasks;

namespace ExploreCalifornia.Services
{
	public class LifeSimulationService : ILifeSimulationService
    {
        private int Heigth;
        private int Width;
        private bool[,] Cells { get; set; }

        /// <summary>
        /// Initializes a new Game of Life.
        /// </summary>
        /// <param name="Heigth">Heigth of the cell field.</param>
        /// <param name="Width">Width of the cell field.</param>

        public void SetDimensions(int Heigth, int Width)
        {
            this.Heigth = Heigth;
            this.Width = Width;
            Cells = new bool[Heigth, Width];
            GenerateField();
        }


        public bool[,] GetState()
        {
            return Cells;
        }


        /// <summary>
        /// Advances the game by one generation according to GoL's ruleset.
        /// </summary>

        public void Grow()
        {
            for (int i = 0; i < Heigth; i++)
            {
                for (int j = 0; j < Width; j++)
                {
                    int numOfAliveNeighbors = GetNeighbors(i, j);

                    if (Cells[i, j])
                    {
                        if (numOfAliveNeighbors < 2)
                        {
                            Cells[i, j] = false;
                        }

                        if (numOfAliveNeighbors > 3)
                        {
                            Cells[i, j] = false;
                        }
                    }
                    else
                    {
                        if (numOfAliveNeighbors == 3)
                        {
                            Cells[i, j] = true;
                        }
                    }
                }
            }
        }

        /// <summary>
        /// Checks how many alive neighbors are in the vicinity of a cell.
        /// </summary>
        /// <param name="x">X-coordinate of the cell.</param>
        /// <param name="y">Y-coordinate of the cell.</param>
        /// <returns>The number of alive neighbors.</returns>

        private int GetNeighbors(int x, int y)
        {
            int NumOfAliveNeighbors = 0;

            for (int i = x - 1; i < x + 2; i++)
            {
                for (int j = y - 1; j < y + 2; j++)
                {
                    if (!((i < 0 || j < 0) || (i >= Heigth || j >= Width)))
                    {
                        if (Cells[i, j] == true) NumOfAliveNeighbors++;
                    }
                }
            }
            return NumOfAliveNeighbors;
        }

       
        /// <summary>
        /// Initializes the field with random boolean values.
        /// </summary>

        private void GenerateField()
        {
            Random generator = new Random();
            int number;
            for (int i = 0; i < Heigth; i++)
            {
                for (int j = 0; j < Width; j++)
                {
                    number = generator.Next(2);
                    Cells[i, j] = ((number == 0) ? false : true);
                }
            }
        }
        public void ClearField()
        {
         
            for (int i = 0; i < Heigth; i++)
            {
                for (int j = 0; j < Width; j++)
                {
                   
                    Cells[i, j] = false;
                }
            }
        }
        public Task UpdateField(bool [,] NewCells)
        {
            for (int i = 0; i < Heigth; i++)
            {
                for (int j = 0; j < Width; j++)
                {
                    Cells[i, j] = NewCells[i, j];
                }
            }
            return Task.CompletedTask;
        }
    }
}
