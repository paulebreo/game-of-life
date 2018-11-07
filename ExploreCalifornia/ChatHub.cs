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
        public async Task SendMessage(string name, string text)
        {
            var message = new ChatMessage
            {
                SenderName = name,
                Text = text,
                SentAt = DateTimeOffset.UtcNow
            };
            // Broadcast to all
            await Clients.All.SendAsync("ReceiveMessage", 
                                        message.SenderName, 
                                        message.SentAt, 
                                        message.Text);
        }
    }
}
