﻿using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExploreCalifornia.Models;
using ExploreCalifornia.Services;

namespace ExploreCalifornia
{
    public class LifeHub : Hub
    {

        private readonly ILifeSimulationService life;

        public LifeHub(ILifeSimulationService life) {
            this.life = life;
        }
        public async Task Init()
        {
            life.SetDimensions(10, 10);
            await Clients.All.SendAsync("ReceiveInitialData", life.GetState());
        }
        public async Task Tick()
        {
            life.Grow();
            await Clients.All.SendAsync("ReceiveNewData", life.GetState());
        }
        public async Task Clear()
        {
            life.ClearField();
            await Clients.All.SendAsync("ReceiveNewData", life.GetState());
        }
        public async Task Update(bool [,] Cells)
        {
            var toExclude = new List<string>() { Context.ConnectionId.ToString()};
            await life.UpdateField(Cells);
            //await Clients.All.SendAsync("ReceiveNewData", life.GetState());
            await Clients.AllExcept(toExclude).SendAsync("ReceiveNewData", life.GetState());
        }
    }
}
