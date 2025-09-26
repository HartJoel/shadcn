"use client";

import React, { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { CalculatorIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

function TodoList() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalculatorIcon />
            {date ? format(date, "PPP ") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            className="rounded-lg border"
          />
        </PopoverContent>
      </Popover>
      <ScrollArea className="h-[400px] mt-4 overflow-y-auto">
        {/* LIST ITEM */}
        <div className="flex  flex-col gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="test-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="test-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="test-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="test-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="test-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="test-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="test-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}

export default TodoList;
