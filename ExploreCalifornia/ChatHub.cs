using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExploreCalifornia.Models;
using ExploreCalifornia.Services;

namespace ExploreCalifornia
{
    public class ChatHub : Hub
    {

        //private  GameOfLife gol = null;
        private readonly IGameOfLifeService gol;
        private readonly ILifeSimulationService life;

        public ChatHub(IGameOfLifeService gol, ILifeSimulationService life) {
            //this.gol = new GameOfLife(42);
            this.gol = gol;
            this.life = life;
        }

        public async Task SendMessage(string name, string text, int num, List<String> mylist)
        {
            var message = new ChatMessage
            {
                SenderName = name,
                Text = text,
                SentAt = DateTimeOffset.UtcNow
            };
            int[] list1 = new int[4] { 0, 0, 0, 0 };
            int[] list2 = new int[4] { 5, 6, 7, 8 };
            int[] list3 = new int[4] { 1, 3, 2, 1 };
            int[] list4 = new int[4] { 5, 4, 3, 2 };

            //int[][] lists = new int[][] { list1, list2, list3, list4 };
            List<int[]> lists = new List<int[]>() { list1, list2, list3, list4 };

            List<int> listA = new List<int>() { 0, 0 };
            List<int> listB = new List<int>() { 0, 1 };
            List<int> listC = new List<int>();
            listC.Add(46);
            listC.Add(2);
            List<List<int>> secondList = new List<List<int>>() { listA, listB, listC};
            // Broadcast to all
            //var foo = "fre";
            await Clients.All.SendAsync("ReceiveMessage", 
                                        message.SenderName, 
                                        message.SentAt, 
                                        message.Text, 
                                        lists, 
                                        num, 
                                        mylist,
                                       secondList);
        }
        public async Task IncrementCount()
        {

            gol.Increment();
            Console.WriteLine("The count {0}", gol.GetCount());
            await Clients.All.SendAsync("ReceiveCount", gol.GetCount());
        }
        public async Task Init()
        {
            life.SetDimensions(10, 10);
            System.Threading.Thread.Sleep(10);
            await Clients.All.SendAsync("ReceiveInitialData", life.GetState());
        }
        public async Task Tick()
        {
            life.Grow();
            System.Threading.Thread.Sleep(10);
            await Clients.All.SendAsync("ReceiveNewData", life.GetState());
        }
        public async Task Clear()
        {
            Console.WriteLine("cleared"); 
            life.ClearField();
            await Clients.All.SendAsync("ReceiveNewData", life.GetState());
        }
        public async Task Update(bool [,] Cells)
        {
            Console.WriteLine("cleared");
            await life.UpdateField(Cells);
        }
    }
}
