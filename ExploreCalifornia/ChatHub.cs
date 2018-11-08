using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExploreCalifornia.Models;

namespace ExploreCalifornia
{
    public class ChatHub : Hub
    {


        public ChatHub() {
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
           
            GameOfLife.Increment();
            GameOfLife.Increment();
            await Clients.All.SendAsync("ReceiveGameOfLife", GameOfLife.Count);
        }
        public async Task Tick()
        {
        
            await Clients.All.SendAsync("ReceiveGameOfLife", 69);
        }
    }
}
