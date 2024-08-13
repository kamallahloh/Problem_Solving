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
  Alphabet: array of Boolean;
  i,j: Integer;
  Checked: Boolean;

begin
  Checked := True;

// Initialize the array with Boolean values.
  For i := 0 to 25 do Alphabet[i] := False;

  For j := 1 to Length(s) do
      If IsLetter(s[j]) Then
         Alphabet[ord(UpperCase(s)[j])-64] := True; // Ord('A') = 65

  For i := 0 to 25 do Checked := Checked And Alphabet[i];

  if Checked then
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


end.
