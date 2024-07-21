unit Kata;

interface

function GetSum (a: Int64; b: Int64): Int64;

implementation

// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/pascal
// Beginner Series #3 Sum of Numbers

function GetSum (a: Int64; b: Int64): Int64;
var
  acc, i, temp: Int64;
begin

  if a = b then
    Result := a
  else
  begin
  
    if a > b then
      begin
        temp := a;
        a := b;
        b := temp;
      end;
  
    acc := 0;
    for i := a to b do
      acc := acc + i;
    Result := acc;
  end;
end;
end.