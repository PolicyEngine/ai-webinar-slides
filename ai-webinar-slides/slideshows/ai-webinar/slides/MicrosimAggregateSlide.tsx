import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function MicrosimAggregateSlide() {
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
                  <th className="col-weight w-24">Weight</th>
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
                  <td className="col-weight">500k</td>
                </tr>
                <tr>
                  <td className="col-input">$100,000</td>
                  <td className="col-input">2</td>
                  <td className="col-baseline">$12,000</td>
                  <td className="col-reform-tax">$10,000</td>
                  <td className="col-earnings">+$1,000</td>
                  <td className="col-behavior">$10,300</td>
                  <td className="col-delta">-$1,700</td>
                  <td className="col-weight">700k</td>
                </tr>
                <tr>
                  <td className="col-input">$25,000</td>
                  <td className="col-input">1</td>
                  <td className="col-baseline">-$3,000</td>
                  <td className="col-reform-tax">-$3,000</td>
                  <td className="col-earnings">$0</td>
                  <td className="col-behavior">-$3,000</td>
                  <td className="col-delta">$0</td>
                  <td className="col-weight">100k</td>
                </tr>
                <tr className="row-ellipsis">
                  <td className="col-input">…</td>
                  <td className="col-input">…</td>
                  <td className="col-baseline">…</td>
                  <td className="col-reform-tax">…</td>
                  <td className="col-earnings">…</td>
                  <td className="col-behavior">…</td>
                  <td className="col-delta">…</td>
                  <td className="col-weight">…</td>
                </tr>
                <tr className="row-total">
                  <td className="col-input" colSpan={2}>TOTAL</td>
                  <td className="col-baseline">$960B</td>
                  <td className="col-reform-tax">$930B</td>
                  <td className="col-earnings">+$10B</td>
                  <td className="col-behavior">$935B</td>
                  <td className="col-delta">-$25B</td>
                  <td className="col-weight">170M</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-center gap-8 text-sm">
            <div className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg">
              Policies
            </div>
            <div className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg">
              Dynamics
            </div>
            <div className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg">
              Households
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
