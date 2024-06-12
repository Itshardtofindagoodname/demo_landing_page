import { cn } from "../utils/cn";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconPower,
  IconTable,
  IconVolume,
  IconVolume2,
  IconVolume3,
} from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";
import { IconCommand } from "@tabler/icons-react";
import { IconCaretLeftFilled } from "@tabler/icons-react";
import { IconCaretDownFilled } from "@tabler/icons-react";


export const Trackpad = () => {
    return (
      <div
        className="w-[40%] mx-auto h-32  rounded-xl my-1"
        style={{
          boxShadow: "0px 0px 1px 1px #00000020 inset",
        }}
      ></div>
    );
  };
  
  export const Keypad = () => {
    return (
      <div className="h-full rounded-md bg-[#2b2d30] mx-1 p-1">
        {/* First Row */}
        <Row>
          <KBtn
            className="w-10 flex items-center justify-center pl-[4px] pb-[2px]"
          >
            esc
          </KBtn>
          <KBtn>
            <IconBrightnessDown className="h-[6px] w-[6px]" />
            <span className="inline-block mt-1">F1</span>
          </KBtn>
  
          <KBtn>
            <IconBrightnessUp className="h-[6px] w-[6px]" />
            <span className="inline-block mt-1">F2</span>
          </KBtn>
          <KBtn>
            <IconTable className="h-[6px] w-[6px]" />
            <span className="inline-block mt-1">F3</span>
          </KBtn>
          <KBtn>
            <IconSearch className="h-[6px] w-[6px]" />
            <span className="inline-block mt-1">F4</span>
          </KBtn>
          <KBtn>
            <IconMicrophone className="h-[6px] w-[6px]" />
            <span className="inline-block mt-1">F5</span>
          </KBtn>
          <KBtn>
            <IconMoon className="h-[6px] w-[6px]" />
            <span className="inline-block mt-1">F6</span>
          </KBtn>
          <KBtn>
            <IconPlayerTrackPrev className="h-[6px] w-[6px]" />
            <span className="inline-block mt-1">F7</span>
          </KBtn>
          <KBtn>
            <IconPlayerSkipForward className="h-[6px] w-[6px]" />
            <span className="inline-block mt-1">F8</span>
          </KBtn>
          <KBtn>
            <IconPlayerTrackNext className="h-[6px] w-[6px]" />
            <span className="inline-block mt-1">F8</span>
          </KBtn>
          <KBtn>
            <IconVolume3 className="h-[6px] w-[6px]" />
            <span className="inline-block mt-1">F10</span>
          </KBtn>
          <KBtn>
            <IconVolume2 className="h-[6px] w-[6px]" />
            <span className="inline-block mt-1">F11</span>
          </KBtn>
          <KBtn>
            <IconVolume className="h-[6px] w-[6px]" />
            <span className="inline-block mt-1">F12</span>
          </KBtn>
          <KBtn>
            <IconPower className="h-[8px] w-[8px]" />
          </KBtn>
        </Row>
  
        {/* Second row */}
        <Row>
          <KBtn>
            <span className="block">~</span>
            <span className="block mt-1">`</span>
          </KBtn>
  
          <KBtn>
            <span className="block ">!</span>
            <span className="block">1</span>
          </KBtn>
          <KBtn>
            <span className="block">@</span>
            <span className="block">2</span>
          </KBtn>
          <KBtn>
            <span className="block">#</span>
            <span className="block">3</span>
          </KBtn>
          <KBtn>
            <span className="block">$</span>
            <span className="block">4</span>
          </KBtn>
          <KBtn>
            <span className="block">%</span>
            <span className="block">5</span>
          </KBtn>
          <KBtn>
            <span className="block">^</span>
            <span className="block">6</span>
          </KBtn>
          <KBtn>
            <span className="block">&</span>
            <span className="block">7</span>
          </KBtn>
          <KBtn>
            <span className="block">*</span>
            <span className="block">8</span>
          </KBtn>
          <KBtn>
            <span className="block">(</span>
            <span className="block">9</span>
          </KBtn>
          <KBtn>
            <span className="block">)</span>
            <span className="block">0</span>
          </KBtn>
          <KBtn>
            <span className="block">&mdash;</span>
            <span className="block">_</span>
          </KBtn>
          <KBtn>
            <span className="block">+</span>
            <span className="block"> = </span>
          </KBtn>
          <KBtn
            className="w-10 items-end justify-end pr-[4px] pb-[2px]"
            childrenClassName="items-end"
          >
            delete
          </KBtn>
        </Row>
  
        {/* Third row */}
        <Row>
          <KBtn
            className="w-10 items-end justify-start pl-[4px] pb-[2px]"
            childrenClassName="items-start"
          >
            tab
          </KBtn>
          <KBtn>
            <span className="block">Q</span>
          </KBtn>
  
          <KBtn>
            <span className="block">W</span>
          </KBtn>
          <KBtn>
            <span className="block">E</span>
          </KBtn>
          <KBtn>
            <span className="block">R</span>
          </KBtn>
          <KBtn>
            <span className="block">T</span>
          </KBtn>
          <KBtn>
            <span className="block">Y</span>
          </KBtn>
          <KBtn>
            <span className="block">U</span>
          </KBtn>
          <KBtn>
            <span className="block">I</span>
          </KBtn>
          <KBtn>
            <span className="block">O</span>
          </KBtn>
          <KBtn>
            <span className="block">P</span>
          </KBtn>
          <KBtn>
            <span className="block">{`{`}</span>
            <span className="block">{`[`}</span>
          </KBtn>
          <KBtn>
            <span className="block">{`}`}</span>
            <span className="block">{`]`}</span>
          </KBtn>
          <KBtn>
            <span className="block">{`|`}</span>
            <span className="block">{`\\`}</span>
          </KBtn>
        </Row>
  
        {/* Fourth Row */}
        <Row>
          <KBtn
            className="w-[2.8rem] items-end justify-start pl-[4px] pb-[2px]"
            childrenClassName="items-start"
          >
            caps lock
          </KBtn>
          <KBtn>
            <span className="block">A</span>
          </KBtn>
  
          <KBtn>
            <span className="block">S</span>
          </KBtn>
          <KBtn>
            <span className="block">D</span>
          </KBtn>
          <KBtn>
            <span className="block">F</span>
          </KBtn>
          <KBtn>
            <span className="block">G</span>
          </KBtn>
          <KBtn>
            <span className="block">H</span>
          </KBtn>
          <KBtn>
            <span className="block">J</span>
          </KBtn>
          <KBtn>
            <span className="block">K</span>
          </KBtn>
          <KBtn>
            <span className="block">L</span>
          </KBtn>
          <KBtn>
            <span className="block">{`:`}</span>
            <span className="block">{`;`}</span>
          </KBtn>
          <KBtn>
            <span className="block">{`"`}</span>
            <span className="block">{`'`}</span>
          </KBtn>
          <KBtn
            className="w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]"
            childrenClassName="items-end"
          >
            return
          </KBtn>
        </Row>
  
        {/* Fifth Row */}
        <Row>
          <KBtn
            className="w-[3.65rem] items-end justify-start pl-[4px] pb-[2px]"
            childrenClassName="items-start"
          >
            shift
          </KBtn>
          <KBtn>
            <span className="block">Z</span>
          </KBtn>
          <KBtn>
            <span className="block">X</span>
          </KBtn>
          <KBtn>
            <span className="block">C</span>
          </KBtn>
          <KBtn>
            <span className="block">V</span>
          </KBtn>
          <KBtn>
            <span className="block">B</span>
          </KBtn>
          <KBtn>
            <span className="block">N</span>
          </KBtn>
          <KBtn>
            <span className="block">M</span>
          </KBtn>
          <KBtn>
            <span className="block">{`<`}</span>
            <span className="block">{`,`}</span>
          </KBtn>
          <KBtn>
            <span className="block">{`>`}</span>
            <span className="block">{`.`}</span>
          </KBtn>{" "}
          <KBtn>
            <span className="block">{`?`}</span>
            <span className="block">{`/`}</span>
          </KBtn>
          <KBtn
            className="w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]"
            childrenClassName="items-end"
          >
            shift
          </KBtn>
        </Row>
  
        {/* sixth Row */}
        <Row>
          <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
            <div className="flex justify-end w-full pr-1">
              <span className="block">fn</span>
            </div>
            <div className="flex justify-start w-full pl-1">
              <IconWorld className="h-[6px] w-[6px]" />
            </div>
          </KBtn>
          <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
            <div className="flex justify-end w-full pr-1">
              <IconChevronUp className="h-[6px] w-[6px]" />
            </div>
            <div className="flex justify-start w-full pl-1">
              <span className="block">control</span>
            </div>
          </KBtn>
          <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
            <div className="flex justify-end w-full pr-1">
              <OptionKey className="h-[6px] w-[6px]" />
            </div>
            <div className="flex justify-start w-full pl-1">
              <span className="block">option</span>
            </div>
          </KBtn>
          <KBtn
            className="w-8"
            childrenClassName="h-full justify-between py-[4px]"
          >
            <div className="flex justify-end w-full pr-1">
              <IconCommand className="h-[6px] w-[6px]" />
            </div>
            <div className="flex justify-start w-full pl-1">
              <span className="block">command</span>
            </div>
          </KBtn>
          <KBtn className="w-[8.2rem]"></KBtn>
          <KBtn
            className="w-8"
            childrenClassName="h-full justify-between py-[4px]"
          >
            <div className="flex justify-start w-full pl-1">
              <IconCommand className="h-[6px] w-[6px]" />
            </div>
            <div className="flex justify-start w-full pl-1">
              <span className="block">command</span>
            </div>
          </KBtn>
          <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
            <div className="flex justify-start w-full pl-1">
              <OptionKey className="h-[6px] w-[6px]" />
            </div>
            <div className="flex justify-start w-full pl-1">
              <span className="block">option</span>
            </div>
          </KBtn>
          <div className="w-[4.9rem] mt-[2px] h-6 p-[0.5px] rounded-[4px] flex flex-col justify-end items-center">
            <KBtn className="w-6 h-3">
              <IconCaretUpFilled className="h-[6px] w-[6px]" />
            </KBtn>
            <div className="flex">
              <KBtn className="w-6 h-3">
                <IconCaretLeftFilled className="h-[6px] w-[6px]" />
              </KBtn>
              <KBtn className="w-6 h-3">
                <IconCaretDownFilled className="h-[6px] w-[6px]" />
              </KBtn>
              <KBtn className="w-6 h-3">
                <IconCaretRightFilled className="h-[6px] w-[6px]" />
              </KBtn>
            </div>
          </div>
        </Row>
      </div>
    );
  };
  export const KBtn = ({
    className,
    children,
    childrenClassName,
  }) => {
    return (
      <div
        className={cn(
          "p-[0.5px] rounded-[4px]"
        )}
      >
        <div
          className={cn(
            "h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center",
            className
          )}
          style={{
            boxShadow:
              "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
          }}
        >
          <div
            className={cn(
              "text-neutral-200 text-[5px] w-full flex justify-center items-center flex-col",
              childrenClassName,
            )}
          >
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export const Row = ({ children }) => {
    return (
      <div className="flex gap-[2px] mb-[2px] w-full flex-shrink-0">
        {children}
      </div>
    );
  };
  
  export const OptionKey = ({ className }) => {
    return (
      <svg
        fill="none"
        version="1.1"
        id="icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className={className}
      >
        <rect
          stroke="currentColor"
          strokeWidth={2}
          x="18"
          y="5"
          width="10"
          height="2"
        />
        <polygon
          stroke="currentColor"
          strokeWidth={2}
          points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
        />
        <rect
          id="_Transparent_Rectangle_"
          className="st0"
          width="32"
          height="32"
          stroke="none"
        />
      </svg>
    );
  };