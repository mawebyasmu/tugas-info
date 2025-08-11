import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface QuizConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

export const QuizConfirmationModal = ({ isOpen, onClose, onContinue }: QuizConfirmationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-gradient mb-4">
            📚 Siap untuk Kuis? 🧠
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center space-y-6 animate-fade-in">
          <div className="text-6xl animate-bounce">
            🎯
          </div>
          
          <div className="space-y-4">
            <p className="text-lg font-medium text-foreground">
              Apakah kamu sudah memahami kedua materi tersebut?
            </p>
            
            <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
              <p className="text-sm text-muted-foreground">
                ✅ Informatika & Kemampuan Umum<br/>
                ✅ Berpikir Komputasional
              </p>
            </div>
            
            <p className="text-base text-foreground">
              Kalau sudah, kita lanjutkan ke tahap selanjutnya yaitu 
              <span className="font-bold text-primary"> KUIS</span>! 🚀
            </p>
            
            <p className="text-sm text-muted-foreground">
              Silahkan klik <strong>LANJUTKAN</strong> untuk mengerjakan kuis interaktif yang seru!
            </p>
          </div>
          
          <div className="flex gap-3 justify-center">
            <Button
              onClick={onClose}
              variant="outline"
              className="px-6"
            >
              Belajar Dulu 📖
            </Button>
            <Button
              onClick={onContinue}
              className="btn-hero px-8"
            >
              LANJUTKAN 🎯
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};