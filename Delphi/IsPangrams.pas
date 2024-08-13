unit IsPangrams;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, StdCtrls;

type
  TIsPangram = class(TForm)
    Label1: TLabel;
    Memo1: TMemo;
    procedure FormShow(Sender: TObject);
  function IsPangram (s: string): boolean;
  function IsLetter(const Char: Char): Boolean;

  private
    { Private declarations }
  public
    { Public declarations }
  Alphabet: array[0..25] of Boolean;
  end;

var
  IsPangram: TIsPangram;

implementation

uses Math, StrUtils;

{$R *.dfm}

function TIsPangram.IsPangram (s: string): boolean;
Var
  i, j: Integer;
  Checked: Boolean;
  CheckLtr: String;
begin
  Checked := True;
  // Initialize the array with Boolean values.
  For i := 1 to 26 do Alphabet[i] := False;
  
  // Convert string to uppercase for case-insensitive check
  s := UpperCase(s);

  For j := 1 to Length(s) do
    If IsLetter(s[j]) Then
      Alphabet[ord(s[j]) - 64] := True; // ord('A') = 65

  For i := 1 to 26 do
    Begin
    CheckLtr := IfThen(Alphabet[i],'True','False');

    Memo1.Lines.Add(Char(i+64)+' => '+CheckLtr);
    Checked := Checked And Alphabet[i];
    End;

  Result := Checked;
end;

procedure TIsPangram.FormShow(Sender: TObject);
begin
  Label1.Caption := IfThen(IsPangram('AbCdEfGhIjKlM zYxWvUtSrQpOn'),'Is Pangram','Is not Pangram');
end;

function TIsPangram.IsLetter(const Char: Char): Boolean;
begin
  Result := (Char in ['A'..'Z']) or (Char in ['a'..'z']);
end;


end.

 {
### Codewars Best Answer

unit Kata;

interface

function IsPangram(s: String): Boolean;

implementation

function IsPangram(s: String): Boolean;
var
  cs: Set of Char = [];
  c: Char;
begin
  for c in s do
    Include(cs, LowerCase(c));
  Result := cs >= ['a'..'z'];
end;

end.

 }

{
### Codewars My Answer

unit Kata;

interface
uses
  SysUtils, Variants, Classes;
  
function IsPangram (s: string): boolean;
function IsLetter(const Char: Char): Boolean;

var 
  Alphabet: array[0..25] of Boolean;
  
implementation

function IsPangram (s: string): boolean;
var
  i, j: Integer;
  Checked: Boolean;
  CheckLtr: String;
begin
  Checked := True;
  // Initialize the array with Boolean values.
  for i := 1 to 26 do Alphabet[i] := False;
  
  // Convert string to uppercase for case-insensitive check
  s := UpperCase(s);

  for j := 1 to Length(s) do
    if IsLetter(s[j]) then
      Alphabet[ord(s[j]) - 64] := True; // ord('A') = 65

  for i := 1 to 26 do
    Checked := Checked And Alphabet[i];


  IsPangram := Checked;
end;

function IsLetter(const Char: Char): Boolean;
begin
  IsLetter := (Char in ['A'..'Z']) or (Char in ['a'..'z']);
end;

end.

}
