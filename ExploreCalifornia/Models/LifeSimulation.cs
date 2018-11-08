using System;
namespace ExploreCalifornia.Models
{
    public class LifeSimulation
    {
        public static int Height = 10;
        public static int Width = 10;
        public static int[,] Cells = new int[Height, Width];

        /// <summary>
        /// Initializes a new Game of Life.
        /// </summary>
        /// <param name="Heigth">Heigth of the cell field.</param>
        /// <param name="Width">Width of the cell field.</param>

        public LifeSimulation()
        {

        }

        /// <summary>
        /// Advances the game by one generation and prints the current state to console.
        /// </summary>
        public static void DrawAndGrow()
        {
            DrawGame();
            Grow();
        }

        /// <summary>
        /// Advances the game by one generation according to GoL's ruleset.
        /// </summary>

        public static void Grow()
        {
            for (int i = 0; i < Height; i++)
            {
                for (int j = 0; j < Width; j++)
                {
                    int numOfAliveNeighbors = GetNeighbors(i, j);

                    if (Cells[i, j] == 1)
                    {
                        if (numOfAliveNeighbors < 2)
                        {
                            Cells[i, j] = 0;
                        }

                        if (numOfAliveNeighbors > 3)
                        {
                            Cells[i, j] = 1;
                        }
                    }
                    else
                    {
                        if (numOfAliveNeighbors == 3)
                        {
                            Cells[i, j] = 1;
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

        public static int GetNeighbors(int x, int y)
        {
            int NumOfAliveNeighbors = 0;

            for (int i = x - 1; i < x + 2; i++)
            {
                for (int j = y - 1; j < y + 2; j++)
                {
                    if (!((i < 0 || j < 0) || (i >= Height || j >= Width)))
                    {
                        if (Cells[i, j] == 1) NumOfAliveNeighbors++;
                    }
                }
            }
            return NumOfAliveNeighbors;
        }

        /// <summary>
        /// Draws the game to the console.
        /// </summary>

        public static void DrawGame()
        {
            for (int i = 0; i < Height; i++)
            {
                for (int j = 0; j < Width; j++)
                {
                    Console.Write(Cells[i, j] == 1 ? "x" : " ");
                    if (j == Width - 1) Console.WriteLine("\r");
                }
            }
            Console.SetCursorPosition(0, Console.WindowTop);
        }

        /// <summary>
        /// Initializes the field with random boolean values.
        /// </summary>

        public static void GenerateField()
        {
            Random generator = new Random();
            int number;
            number = generator.Next(2);
            for (int i = 0; i < Height; i++)
            {
                for (int j = 0; j < Width; j++)
                {
                    number = generator.Next(2);
                    Cells[i, j] = ((number == 0) ? 0 : 1);
                }
            }
        }
    }
}
