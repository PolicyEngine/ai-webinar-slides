import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function MicrosimDynamicsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Let&apos;s see a microsimulation example</SlideTitle>
      </SlideHeader>

      <div className="flex justify-center items-center mt-12">
        <div className="space-y-2">
          <div className="microsim-table">
            <table>
              <thead>
                <tr>
                  <th className="px-6 py-1"></th>
                  <th className="px-6 py-1"></th>
                  <th className="px-6 py-1 text-center group-baseline">Baseline</th>
                  <th className="px-6 py-1 text-left group-reform" colSpan={5}>Reform</th>
                </tr>
                <tr>
                  <th className="w-32">Gross income</th>
                  <th className="w-24"># kids</th>
                  <th className="col-baseline w-28">Taxes</th>
                  <th className="col-reform-tax w-32">Taxes Static</th>
                  <th className="col-earnings w-32">Δ earnings</th>
                  <th className="col-behavior w-36">Tax w/ behavior</th>
                  <th className="col-delta w-24">Δ tax</th>
                  <th className="col-weight opacity-0 w-24">Weight</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-input">$100,000</td>
                  <td className="col-input">0</td>
                  <td className="col-baseline">$21,000</td>
                  <td className="col-reform-tax">$20,000</td>
                  <td className="col-earnings">+$700</td>
                  <td className="col-behavior">$20,150</td>
                  <td className="col-delta">-$850</td>
                  <td className="col-weight opacity-0">500k</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-center gap-8">
            <div className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg text-xl">
              Policies
            </div>
            <div className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg text-xl">
              Dynamics
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
