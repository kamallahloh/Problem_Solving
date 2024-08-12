unit IsPangrams;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, StdCtrls;

type
  TIsPangram = class(TForm)
    Label1: TLabel;
    procedure FormShow(Sender: TObject);
  function IsPangram (s: string): boolean;
  function IsLetter(const Char: Char): Boolean;
  procedure SpliceArray(var AArray: array of Integer; Index, Count: Integer; const InsertValues: array of Integer);

  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  IsPangram: TIsPangram;

implementation

uses Math, StrUtils;

{$R *.dfm}

function TIsPangram.IsPangram (s: string): boolean;
Var
  Alphabet: array of Char;
  i,j: Integer;
  LetterToCheck: Char;
  UpCase: string;
begin
// Initialize the array with lowercase letters
  for i := 0 to 25 do
    Alphabet[i] := Chr(Ord('A') + i);

  UpCase := UpperCase(s);

  For j := 1 to Length(UpCase) do
    begin
//////////////////////////////////
    // Letter to check
      LetterToCheck := UpCase[j];

    // Search for the letter
      if Length(Alphabet) = 0 then Exit;
      for i := 0 to 25 do
        if Alphabet[i] = LetterToCheck then
          SpliceArray(Alphabet,i,1,[]);
//////////////////////////////////
    end;


  if Length(Alphabet) = 0 then
    IsPangram := True
  else
    IsPangram := False;
end;

procedure TIsPangram.FormShow(Sender: TObject);
begin

  Label1.Caption := IfThen(IsPangram('AbCdEfGhIjKlM zYxWvUtSrQpOn'),'Is Pangram','Is not Pangram');
end;

function TIsPangram.IsLetter(const Char: Char): Boolean;
begin
  Result := (Char in ['A'..'Z']) or (Char in ['a'..'z']);
end;

procedure TIsPangram.SpliceArray(var AArray: array of Char; Index, Count: Integer; const InsertValues: array of Char);
var
  i, j, NewLength: Integer;
begin
  // Calculate new length
  NewLength := Length(AArray) - Count + Length(InsertValues);

  // Resize array
  SetLength(AArray, NewLength);

  // Shift elements after the splice point
  for i := High(AArray) downto Index + Length(InsertValues) do
    AArray[i] := AArray[i - Length(InsertValues)];

  // Insert new elements
  for i := 0 to High(InsertValues) do
    AArray[Index + i] := InsertValues[i];
end;

end.
