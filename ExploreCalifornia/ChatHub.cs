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
        public async Task SendMessage(string name, string text, int num)
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
            // Broadcast to all
            //var foo = "fre";
            await Clients.All.SendAsync("ReceiveMessage", 
                                        message.SenderName, 
                                        message.SentAt, 
                                        message.Text, 
                                        lists, num);
        }
    }
}
