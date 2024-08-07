unit Katas2;

interface

uses
  SysUtils, Types, Classes, Variants, QTypes, QGraphics, QControls, QForms, 
  QDialogs, QStdCtrls;

type
  TKata = class(TForm)
    Label1: TLabel;
    Label2: TLabel;
    function PrinterError(s: String): String;
    procedure FormActivate(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Kata: TKata;

implementation

{$R *.xfm}

function TKata.PrinterError(s: String): String;

const
  List : array[1..13] of string = ('a','b','c','d','e','f','g','h','i','j','k','l','m');

Var
  L,I,J,VErrors: integer;

begin
  // your code
    L := Length(s);
    I := 1;
    VErrors := L;

    while I <= L do
      begin

        //If List.Includes(s[I]) then VErrors := VErrors + 1;
        //if s[I] in List then VErrors := VErrors + 1;

        for J := 1 to 13 do
          begin
            {ShowMessage('J='+IntToStr(J)+#13#10+
                        'I='+IntToStr(I)+#13#10+
                        'List[J]= '+List[J]+#13#10+
                        's[I] = '+s[I]+#13#10+
                        'T='+BoolToStr(List[J]=s[I])+#13#10+
                        'E='+IntToStr(VErrors));}

            if (List[J]=s[I]) then
              begin
              VErrors := VErrors - 1;
              Break;
              end;
          end;

        I := I+1;
      end;

    Result := IntToStr(VErrors)+'/'+IntToStr(L);
end;

procedure TKata.FormActivate(Sender: TObject);
begin
    Label1.Caption := '';
    Label1.Caption := '0/14 ==> ' + PrinterError('aaabbbbhaijjjm'); // 0/14

    Label2.Caption := '';
    Label2.Caption := '8/22 ==> ' + PrinterError('aaaxbbbbyyhwawiwjjjwwm');  // 8/22
end;

end.
