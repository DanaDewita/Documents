import React from 'react';

const PresentationDeck = () => {
  // This would normally be real data, using placeholder for demonstration
  const orderDistribution = [65, 22, 13]; // % of users with 1, 2, 3+ orders
  const weekdayVsWeekend = {
    orderVolume: [35, 65], // % weekday vs weekend
    deliveryTime: [64, 54] // minutes weekday vs weekend
  };
  const cuisineDistribution = [35, 15, 12, 11, 27]; // American, Japanese, Italian, Chinese, Others
  
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Slide 1: The Problem Statement */}
      <div className="mb-16 bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-red-800 mb-6">FoodHub's Critical Challenge</h1>
        <div className="flex items-center">
          <div className="w-1/2">
            <div className="bg-red-100 p-4 rounded border-l-4 border-red-500 mb-4">
              <p className="text-red-700 font-bold text-xl">65% of users never return after first order</p>
            </div>
            <p className="text-gray-700 mb-4">Despite strong restaurant partnerships and initial user acquisition, FoodHub is failing to convert first-time users into loyal customers.</p>
            <p className="font-medium text-gray-800">Our data analysis reveals why customers aren't returning and what we can do about it.</p>
          </div>
          <div className="w-1/2 pl-8">
            <div className="h-48 bg-red-700 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-2">65%</div>
                <div className="text-xl">One-and-done users</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2: Customer Retention Crisis Details */}
      <div className="mb-16 bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">The Customer Retention Crisis</h2>
        
        {/* Problem analysis above the chart */}
        <div className="mb-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Problem Analysis</h3>
            <p className="text-gray-600 mt-2">Only 13% of customers make three or more orders. FoodHub is acquiring users but failing to create a habit-forming experience.</p>
          </div>
          
          <div className="p-3 bg-red-50 border-l-4 border-red-400 rounded mb-4">
            <p className="text-gray-700">This represents a massive revenue leak. Even a 20% improvement in retention would drive a 13% revenue increase.</p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="w-4/5">
            <div className="h-64 flex items-end justify-around">
              {orderDistribution.map((value, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="rounded-t-lg" 
                    style={{
                      width: '80px', 
                      height: `${value * 3}px`,
                      backgroundColor: index === 0 ? '#EF4444' : index === 1 ? '#3B82F6' : '#10B981'
                    }}
                  ></div>
                  <div className="mt-2 font-medium">{index === 0 ? '1 Order' : index === 1 ? '2 Orders' : '3+ Orders'}</div>
                  <div className="mt-1 text-xl font-bold">{value}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide 3: The Weekend Paradox Problem */}
      <div className="mb-16 bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">The Weekend Efficiency Paradox</h2>
        
        {/* Problem box first - above the graphs */}
        <div className="mb-6 p-4 bg-red-50 rounded border-l-4 border-red-500">
          <p className="text-gray-700"><span className="font-semibold">Problem identified:</span> Despite having FEWER orders (less volume), weekday deliveries are 10 minutes SLOWER than busy weekends. This inconsistency harms the user experience.</p>
        </div>
        
        <div className="flex">
          <div className="w-1/2">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Order Volume</h3>
            <div className="flex h-32 items-end mb-8">
              <div className="w-32 mr-8">
                <div 
                  className="bg-blue-500 rounded-t-lg w-full" 
                  style={{height: `${weekdayVsWeekend.orderVolume[0] * 2}px`}}
                ></div>
                <div className="mt-2 text-center font-medium">Weekday</div>
                <div className="text-center text-lg font-bold">{weekdayVsWeekend.orderVolume[0]}%</div>
              </div>
              <div className="w-32">
                <div 
                  className="bg-green-500 rounded-t-lg w-full" 
                  style={{height: `${weekdayVsWeekend.orderVolume[1] * 2}px`}}
                ></div>
                <div className="mt-2 text-center font-medium">Weekend</div>
                <div className="text-center text-lg font-bold">{weekdayVsWeekend.orderVolume[1]}%</div>
              </div>
            </div>
          </div>
          <div className="w-1/2 pl-8">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Delivery Time (minutes)</h3>
            <div className="flex h-32 items-end">
              <div className="w-32 mr-8">
                <div 
                  className="bg-red-500 rounded-t-lg w-full" 
                  style={{height: `${weekdayVsWeekend.deliveryTime[0]}px`}}
                ></div>
                <div className="mt-2 text-center font-medium">Weekday</div>
                <div className="text-center text-lg font-bold">{weekdayVsWeekend.deliveryTime[0]} min</div>
              </div>
              <div className="w-32">
                <div 
                  className="bg-green-500 rounded-t-lg w-full" 
                  style={{height: `${weekdayVsWeekend.deliveryTime[1]}px`}}
                ></div>
                <div className="mt-2 text-center font-medium">Weekend</div>
                <div className="text-center text-lg font-bold">{weekdayVsWeekend.deliveryTime[1]} min</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 4: Cuisine Distribution Problem */}
      <div className="mb-16 bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Limited Cuisine Diversity</h2>
        
        {/* Problem analysis boxes above the chart */}
        <div className="mb-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Problem Analysis</h3>
            <p className="text-gray-600 mt-2">New Yorkers heavily prefer American cuisine (35%), with limited exploration of diverse options. This narrows FoodHub's restaurant partner ecosystem.</p>
          </div>
          
          <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <p className="text-gray-700">Limited cuisine exploration means missed opportunities for additional revenue streams and differentiation from competitors.</p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="w-4/5">
            <div className="h-64">
              <div className="flex h-full items-end justify-around">
                {cuisineDistribution.map((value, index) => {
                  const cuisines = ['American', 'Japanese', 'Italian', 'Chinese', 'Others'];
                  const colors = ['#EF4444', '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'];
                  
                  return (
                    <div key={index} className="flex flex-col items-center">
                      <div 
                        className="rounded-t-lg" 
                        style={{
                          width: '70px', 
                          height: `${value * 4}px`,
                          backgroundColor: colors[index]
                        }}
                      ></div>
                      <div className="mt-2 font-medium">{cuisines[index]}</div>
                      <div className="mt-1 text-lg font-bold">{value}%</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 5: Strategic Recommendations Framework */}
      <div className="mb-16 bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">5-Point Strategic Recommendation Framework</h2>
        
        {/* The actual 5-point framework */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { title: 'Target Market Refinement', icon: '🎯', color: 'bg-blue-100 border-blue-400', desc: 'Define high-value segments' },
            { title: 'Experience Optimization', icon: '✨', color: 'bg-blue-100 border-blue-400', desc: 'Enhance discovery & checkout' },
            { title: 'Value Proposition', icon: '💎', color: 'bg-blue-100 border-blue-400', desc: 'Differentiate from competitors' },
            { title: 'Retention-First', icon: '🔄', color: 'bg-blue-100 border-blue-400', desc: 'Implement tiered rewards' },
            { title: 'Operational Integration', icon: '⚙️', color: 'bg-blue-100 border-blue-400', desc: 'Reduce delivery to <45 min' }
          ].map((item, i) => (
            <div key={i} className={`p-4 rounded border-l-4 ${item.color}`}>
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Expected impact separated as its own section */}
        <div className="p-4 bg-green-50 rounded border-l-4 border-green-500 mb-6">
          <div className="flex items-center">
            <div className="text-3xl mr-3">📈</div>
            <div>
              <h3 className="font-semibold mb-1">Expected Impact</h3>
              <p className="text-gray-700">+40% repeat orders in 6 months</p>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-blue-50 rounded border-l-4 border-blue-500">
          <h3 className="font-semibold mb-2">Our analysis shows that this integrated approach will transform FoodHub's retention metrics.</h3>
          <p className="text-sm text-gray-600">Each component of the framework directly addresses a key problem identified in the data analysis.</p>
        </div>
      </div>

      {/* Slide 6: Specific Implementation Plan */}
      <div className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Implementation Plan & Expected Impact</h2>
        <div className="flex">
          <div className="w-1/2 pr-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Key Performance Targets</h3>
            
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Repeat Orders</span>
                <span className="text-sm font-medium">+40%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '40%'}}></div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Delivery Time</span>
                <span className="text-sm font-medium">45 min</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Weekday Volume</span>
                <span className="text-sm font-medium">75% of Weekend</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-600 h-2 rounded-full" style={{width: '55%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Cuisine Diversity</span>
                <span className="text-sm font-medium">+30%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{width: '30%'}}></div>
              </div>
            </div>
          </div>
          
          <div className="w-1/2 pl-8 border-l border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Immediate Action Items</h3>
            
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 rounded">
                <p className="text-sm font-medium">1. Launch weekday delivery partner incentive program to match weekend efficiency</p>
              </div>
              
              <div className="p-3 bg-blue-50 rounded">
                <p className="text-sm font-medium">2. Implement 30-day trial of cuisine exploration rewards for second-time users</p>
              </div>
              
              <div className="p-3 bg-blue-50 rounded">
                <p className="text-sm font-medium">3. Redesign restaurant discovery flow to highlight diverse cuisines</p>
              </div>
              
              <div className="p-3 bg-blue-50 rounded">
                <p className="text-sm font-medium">4. Roll out pre-scheduling option with 10% discount for weekday lunch orders</p>
              </div>
              
              <div className="p-3 bg-blue-50 rounded">
                <p className="text-sm font-medium">5. Establish weekly restaurant training on optimizing kitchen efficiency during peak times</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 p-4 bg-green-50 rounded border-l-4 border-green-500">
          <p className="font-medium">This focused strategy prioritizes converting one-time users into loyal customers through a cohesive experience that delivers consistent value across all touchpoints.</p>
        </div>
      </div>
    </div>
  );
};

export default PresentationDeck;
