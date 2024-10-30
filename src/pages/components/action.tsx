import Lable from "./lable";
import { LableVariant } from "../../../types/enum/lable";

export default function Action() {
  return (
    <div className="text-center mx-auto my-0 flex flex-col items-center gap-6">
      <div className="space-y-3">
        <div>
          <Lable variant={LableVariant.Primary}>Call to Action</Lable>
        </div>
        <h1>Get This App Now, As a Trail</h1>
      </div>
      <span>
        Free CRM system for your sales team with all the essential tools sales
        funnel, pipeline management, sales reports, 360-degree customer view,
        support for repeat sales
      </span>
      <div className="flex items-center gap-4">
        <button>Get Started Now</button>
        <button>Contact Us</button>
      </div>
    </div>
  );
}
